function first(obj)
{
  var a = obj.age.value
  let s
  if(a=="")
    {alert ("Вы не указали возраст")}
  else
  {
    a = Number (a)
    if (obj.elements[0].checked && a>=60 || obj.elements[1].checked && a>=55)
    {s="Пенсионный возраст"; obj.res.value=s}
    else if (obj.elements[0].checked && a<60 || obj.elements[1].checked && a<55)
    {s="Еще не пенсионный возраст"; obj.res.value=s}
    else {
      alert("Вы не выбрали форму")
    }
  }
}

function second(obj)
{
  var a = obj.elements[0].value
  let s=`Вы:\n  `
  if (obj.elements[0].checked)
    {s=s+obj.elements[0].value+`,\n`}
  else if (obj.elements[1].checked)
    {s=s+obj.elements[1].value+`,\n`}
  for (var i=2; i<=6; i++)
    if ((obj.elements[i]).checked)
      {s=s+`    `+obj.elements[i].value+`\n`}
  s=s+`Человек`
  obj.textWindow.value=s
}

var k=1
function changepic ()
{
  var d=document
  if (k < 2)
  {
    d.mypict2.src="images/pic"+k+".jpg"
    k=k+1
    d.mypict1.src="images/pic"+k+".jpg"
  }
  else
  {
    d.mypict2.src="images/pic"+k+".jpg"
    k=1
    d.mypict1.src="images/pic"+k+".jpg"
  }
}
setInterval(changepic, 2000);

function more1 ()
{
  var d=document
  d.mypict1.width=600
}
function more2 ()
{
  var d=document
  d.mypict2.width=600
}
function less1 ()
{
  var d=document
  d.mypict1.width=300
}
function less2 ()
{
  var d=document
  d.mypict2.width=300
}
