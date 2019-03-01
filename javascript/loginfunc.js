function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "Formget" && password == "formget#123"){
		alert("Login successfull");
		window.location = "index.html";
		return flase;
		}
	else{
	alert("Login failed");
	}
}