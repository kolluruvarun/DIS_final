from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


def get_db():
    db = sqlite3.connect('user.db')
    db.row_factory = sqlite3.Row
    return db


def close_db(db):
    db.close()


@app.route('/')
def index():
    return render_template('login.html')

@app.route('/index')
def index_r():
    return render_template('index.html')

@app.route('/about_us')
def about_r():
    return render_template('about_us.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = request.form['user_id']
        password = request.form['password']
        query = 'SELECT * FROM LOGIN_TABLE WHERE user = ? AND password = ?'
        db = get_db()
        validation = db.execute(query, (user, password)).fetchall()
        close_db(db)
        if len(validation) == 0:
            return render_template('login.html', error='Sorry incorrect credentials! Try again.')
        else:
            return render_template('index.html')
    return render_template('login.html')



@app.route('/signup', methods=['POST','GET'])
def signup():
    if request.method=="GET":
        return render_template('signup.html')
    if request.method=="POST":

        print(request.method)
        print(request.data)
        print(request.json)
        # Get data from request body
        email = request.json.get('email')
        regno = request.json.get('regno')
        password = request.json.get('password')
        # Validate data
        if not email or not regno or not password:
            print("Fill all the details")
            return render_template('Error.html')

        # Connect to database
        conn = sqlite3.connect('user.db')
        c = conn.cursor()

        # Insert data into database
        try:
            c.execute("INSERT INTO LOGIN_TABLE (email, regno, password) VALUES (?, ?, ?)", (email, regno, password))
            conn.commit()
            return render_template('index.html')
        except Exception as e:
            print(e)
            return render_template('Error.html')
        finally:
            conn.close()



@app.route('/credit_score',methods=['GET'])
def getCreditScore():
    return render_template('credit_score.html')


@app.route('/chart',methods=['GET'])
def getCreditChart():
    return render_template('chart.html')