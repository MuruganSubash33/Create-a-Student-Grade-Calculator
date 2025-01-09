var id=parseInt(prompt("Enter Your Id"));
var studentname=(prompt("Enter the Name"));
var m1=parseInt(prompt("Tamil"));
var m2=parseInt(prompt("English"));
var m3=parseInt(prompt("Maths"));
var m4=parseInt(prompt("Computer"));
var m5=parseInt(prompt("Chemistry"));
var m6=parseInt(prompt("Physics"));
var total=m1+m2+m3+m4+m5+m6;
var percentage=(total*200/1200);
document.write("total ="+total+"<br>");
document.write("percentage ="+percentage);
if(percentage>180)
{
    alert("Grade A")
}
else if((percentage<180)&&(percentage>160))
{
alert("Grade B")
}
else if((percentage<160)&&(percentage>140))
{
alert("Grade C")
}
else if((percentage<140)&&(percentage>120))
    {
    alert("Grade D")
    }
    else if((percentage<120)&&(percentage>100))
        {
        alert("Grade E")
        }
else{
    alert("Fail")
}
