function fun1()
{	
	var b=document.getElementById("bill").value;
	
    var p=document.getElementById("peo").value;
    var q=document.getElementById("sev").value;
	document.getElementById("demo").innerHTML=((b*q)/100)/p;
}