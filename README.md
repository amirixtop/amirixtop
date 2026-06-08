<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
</head>
<body>

<h2>تسجيل الدخول</h2>

<input id="uid" placeholder="ID">
<br><br>
<input id="name" placeholder="Name">
<br><br>

<button onclick="login()">دخول</button>

<p id="msg"></p>

<script>
function login() {
    let id = document.getElementById("uid").value;
    let name = document.getElementById("name").value;

    if(id === "1234" && name === "Amir") {
        document.getElementById("msg").innerHTML = "تم الدخول ✔️";
        window.location.href = "home.html";
    } else {
        document.getElementById("msg").innerHTML = "خطأ في ID أو الاسم ❌";
    }
}
</script>

</body>
</html>
