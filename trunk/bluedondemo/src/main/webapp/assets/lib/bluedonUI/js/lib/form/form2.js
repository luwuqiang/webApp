// JavaScript Document
function allsel(n1,n2)
{
  while(n1.selectedIndex!=-1)
  {
  	var indx=n1.selectedIndex;
  	var t=n1.options[indx].text;
  	n2.options.add(new Option(t));
  	n1.remove(indx);
  }
}