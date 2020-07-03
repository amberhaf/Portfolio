 function add(row)
  {
  		num = document.getElementById('num'+row);
 		 num.innerHTML++;
      
      if(num.innerHTML>0 && row===1)
        {
           document.getElementById("button" + row ).style.backgroundColor="#DA70D6";
        }
      else if(num.innerHTML>1 && row===2)
        {
           document.getElementById("button" + row ).style.backgroundColor="#DA70D6";
        }
       else if(num.innerHTML>2 && row===3)
        {
           document.getElementById("button" + row ).style.backgroundColor="#DA70D6";
        }
       else if(num.innerHTML>3 && row===4)
        {
           document.getElementById("button" + row ).style.backgroundColor="#DA70D6";
        }
       else if(num.innerHTML>4 && row===5)
        {
           document.getElementById("button" + row ).style.backgroundColor="#DA70D6";
        }
       else if(num.innerHTML>5 && row===6)
        {
           document.getElementById("button" + row ).style.backgroundColor="#DA70D6";
        }
      
      
      if(row<2)
        {        
            var j= document.getElementsByTagName("div")[1];
            j.style.height = (j.offsetHeight + 10) + "px";
            
            var elem1=document.getElementById('two');
            var c = window.getComputedStyle(elem1, null).getPropertyValue("margin-top");
            document.getElementById("two").style.marginTop=(parseInt(c)+10)+"px";
        }
      if(row<3)
        {
            var elem2=document.getElementById('gap');
            var d = window.getComputedStyle(elem2, null).getPropertyValue("margin-top");
            document.getElementById("gap").style.marginTop=(parseInt(d)+10)+"px";
            
            var elem3=document.getElementById('three');
            var e = window.getComputedStyle(elem3, null).getPropertyValue("margin-top");
            document.getElementById("three").style.marginTop=(parseInt(e)+10)+"px";
        }
      if(row<4)
        {
            var elem4=document.getElementById('four' );
            var f = window.getComputedStyle(elem4, null).getPropertyValue("margin-top");
            document.getElementById("four").style.marginTop=(parseInt(f)+10)+"px";
        }
      if(row<5)
        {
            var elem5=document.getElementById('five' );
            var g = window.getComputedStyle(elem5, null).getPropertyValue("margin-top");
            document.getElementById("five").style.marginTop=(parseInt(g)+10)+"px";
        }
      if(row<6)
        {
            var elem6=document.getElementById('six' );
            var i = window.getComputedStyle(elem6, null).getPropertyValue("margin-top");
            document.getElementById("six").style.marginTop=(parseInt(i)+10)+"px";
        }
      if(row<7)
        {       
                    var j=document.getElementById('start');
                    j.style.height = (j.offsetHeight + 10) + "px";
        }
  }

 function sub(row)
  {
  		num = document.getElementById('num'+row);
      if(num.innerHTML>0)
        {
 		 	num.innerHTML--;
        }
      
        if(num.innerHTML<1 && row===1)
        {
           document.getElementById("button" + row ).style.backgroundColor="#929186";
        }
        else if(num.innerHTML<2 && row===2)
        {
            document.getElementById("button" + row ).style.backgroundColor="#929186";
        }
        else if(num.innerHTML<3 && row===3)
        {
            document.getElementById("button" + row ).style.backgroundColor="#929186";
        }
        else if(num.innerHTML<4 && row===4)
        {
            document.getElementById("button" + row ).style.backgroundColor="#929186";
        }
        else if(num.innerHTML<5 && row===5)
        {
            document.getElementById("button" + row ).style.backgroundColor="#929186";
        }
        else if(num.innerHTML<6 && row===6)
        {
            document.getElementById("button" + row ).style.backgroundColor="#929186";
        }
              
        if(num.innerHTML>0)
        {
              if(row<2)
                {

                     var j= document.getElementsByTagName("div")[1];
                    j.style.height = (j.offsetHeight - 10) + "px";

                    var elem1=document.getElementById('two');
                    var c = window.getComputedStyle(elem1, null).getPropertyValue("margin-top");
                    document.getElementById("two").style.marginTop=(parseInt(c)-10)+"px";
                }
              if(row<3)
                {
                    var elem2=document.getElementById('gap');
                    var d = window.getComputedStyle(elem2, null).getPropertyValue("margin-top");
                    document.getElementById("gap").style.marginTop=(parseInt(d)-10)+"px";

                    var elem3=document.getElementById('three');
                    var e = window.getComputedStyle(elem3, null).getPropertyValue("margin-top");
                    document.getElementById("three").style.marginTop=(parseInt(e)-10)+"px";
                }
              if(row<4)
                {
                    var elem4=document.getElementById('four' );
                    var f = window.getComputedStyle(elem4, null).getPropertyValue("margin-top");
                    document.getElementById("four").style.marginTop=(parseInt(f)-10)+"px";
                }
              if(row<5)
                {
                    var elem5=document.getElementById('five' );
                    var g = window.getComputedStyle(elem5, null).getPropertyValue("margin-top");
                    document.getElementById("five").style.marginTop=(parseInt(g)-10)+"px";
                }
              if(row<6)
                {
                    var elem6=document.getElementById('six' );
                    var i = window.getComputedStyle(elem6, null).getPropertyValue("margin-top");
                    document.getElementById("six").style.marginTop=(parseInt(i)-10)+"px";
                }
              if(row<7)
                {       
                    var j=document.getElementById('start');
                    j.style.height = (j.offsetHeight - 10) + "px";
                }
            }
      
  }

function displayDate()
{
   var date = document.getElementById('Date');
   var submit = document.getElementById('Submit'); 
 		document.getElementById('newDate').innerHTML="["+date.value+"]";
    
    if(date.style.visibility==="none")
    {
        date.style.display="block";
    }
    else
    {
        date.style.display="none";
    }
    
     if(submit.style.display==="none")
    {
        submit.style.display="block";
    }
    else
    {
        submit.style.display="none";
    }
    
}
