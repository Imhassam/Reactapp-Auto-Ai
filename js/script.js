function myFunction() {
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var m = document.getElementById("message").value;
    if (n != "" && e != "" && m != "") {
        alert("Thanks For Contacting Us!!")
    } else {
        alert("Please fill completely")
        location.reload();
    }
  }