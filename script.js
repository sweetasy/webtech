 function load_Ind(){
location.href='index.html';
}
 function load_Htm(){
location.href='html.html';
}
 function load_Form(){
location.href='form.html';
}
 function load_JSon(){
location.href='json.html';
}
function get_sTime(){
$.getJSON( "http://users.iit.uni-miskolc.hu/~zelena5/TEST/sTime.php", function( data ) {
  var items = {};
  $.each( data, function( key, val ) {
    items[key]= val;
  });
$("#sTime").html(items["year"]+". "+items["month"]+". "+items["mday"]+". - "+items["hours"]+":"+items["minutes"]+":"+items["seconds"]);

});
}


function validate(){  
var name=document.f1.name.value;  
var password=document.f1.password.value;  
var email = document.f1.email.value;
var status=false;  
  
if(name.length<1){  
document.getElementById("nameloc").innerHTML=  
"<img src='img/unchecked.gif'/> Kérlek add meg a neved";  
status=false;  
}else{  
document.getElementById("nameloc").innerHTML="<img src='img/correct.gif'/>";  
status=true;  
}  
if(password.length<6){  
document.getElementById("passwordloc").innerHTML=  
"<img src='img/unchecked.gif'/> A jelszó legalább 6 karakter hosszú";  
status=false;  
}else{  
document.getElementById("passwordloc").innerHTML="<img src='img/checked.gif'/>";  
status=true;  
}  
 if(email == null || email == ""){ 
document.getElementById("emailloc").innerHTML=  
"<img src='img/unchecked.gif'/> Az emailt kötelező megadni";  
status=false;  
}else{  
document.getElementById("emailloc").innerHTML="<img src='img/checked.gif'/>";  
status=true;  
}  

return status;  
}  