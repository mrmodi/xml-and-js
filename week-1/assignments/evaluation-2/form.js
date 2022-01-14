  
function display() {

    var x=document.form1.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address");  
    return false;  
    }  

    var y = document.getElementById("frm");
    var message="";
    var i;

    for (i = 0; i < y.length ;i++) {
    message = "<li><b>Email: </b>" + document.form1.email.value + "</ul>";
    message += "<li><b>Date of Visit: </b>" + document.form1.dov.value + "</ul>";
    message += "<li><b>COMMENT: </b>" + document.form1.subject.value + "</ul>";


    }
        document.getElementById("res").innerHTML = message;
    
    }