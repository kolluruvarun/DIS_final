import sqlite3

conn = sqlite3.connect('user.db')
cur = conn.cursor()

cur.execute('''CREATE TABLE IF NOT EXISTS LOGIN_TABLE(
 regno TEXT,
 email TEXT,
 password TEXT)
  ''')

conn.commit()
