function credentailsValidation() {
  const userId = document.getElementById("idEmail");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!userId.value.match(mailformat)) {
    alert("Invalid email address!");
  } else {
    var UID = document.getElementById("idUser").value;
    sessionStorage.setItem("UID", UID);
    window.location.replace("/index");
  }
}

function signup(){
  window.location.replace("/signup");
}

function post_user()
{
  $(document).ready(function() {
    $("#signupForm").submit(function(e) {
      
      e.preventDefault();
      var email = $("#idEmail").val();
      var regno = $("#idUser").val();
      var password = $("#password").val();
      var emailRegex = /^\S+@\S+\.\S+$/;
      var regnoRegex = /^[A-Za-z0-9]{3}-[A-Za-z0-9]{2}-[A-Za-z0-9]{3}$/;
      var emailError = false;
      if (!emailRegex.test(email)) {
        $("#emailError").html("Invalid email format");
        emailError = true;
      } else {
        $("#emailError").html("");
        emailError = false;
      }
      if (!regnoRegex.test(regno)) {
        $("#regno").addClass("is-invalid");
        regnoError = true;
      } else {
        $("#regno").removeClass("is-invalid");
        regnoError = false;
      }
      if (!emailError && !regnoError) {
        console.log("posting");
        $.ajax({
          type: "POST",
          url: "http://127.0.0.1:5000/signup",
          data: {
            email: email,
            regno: regno,
            password: password
          },
          success: function() {
            alert("Signup successful");
            $("#signupForm")[0].reset();
          },
          error: function() {
            alert("Signup failed");
          }
        });
      }
    });
  });

}