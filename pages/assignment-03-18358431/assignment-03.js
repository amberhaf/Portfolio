var table = document.getElementById("myTable");
var rows = table.rows;
var a=7;
var b=0;
calc();

//adding a row when add row button clicked
function addRow(){
    var x = table.rows.length;    
    var y = table.rows[0].cells.length;
    var row=table.insertRow(x);
    
            for (var c=0; c < y; c++) {
                var new_cell = row.insertCell(c);
                if(c<a)
                {
                    new_cell.innerHTML = "-";
                new_cell.contentEditable="true";
                }
                else
                {
                    new_cell.innerHTML = "0";
                }
                if(c>a)
                {
                    new_cell.classList.add('show');
                }
                if(c===0)
                {
                    new_cell.onclick = function() {highlight(x)};
                }
            }
    b++;
    display();
    calc();
}

//adding a column when add column button clicked
function addColumn(){
    var m=rows[0].insertCell(a);
    m.innerHTML = "Assignment "+(a-1);
    m.style.backgroundColor="gray";
    m.style.textAlign= "center";
    m.style.fontWeight="bold";
    m.onclick = function() {light(a)};
    
    for (i=1; i<rows.length; i++) {
       var n=rows[i].insertCell(a);
        n.innerHTML = "-";
        n.contentEditable="true";
    }
    a++;
    calc();
}

//reverting table back to original state
function revert(){
    
       var x = table.rows.length; 
        for(var i=0; i<x-11; i++){
       document.getElementById("myTable").deleteRow(table.rows.length-1);                
   }
       
    
        while(a!==7)
        {
            a--;
            for (i=0; i<rows.length; i++) {
               var n=rows[i].deleteCell(a);

            }
        }
    calc();
}

//used in the update function to find the average of assignments submitted by a student
function average(){
     for(var i=1; i<table.rows.length; i++)
    {  
        var cells = rows[i].cells;
        var sum = 0;
        var num = 0;

        for (var x = 2; x < a; x++) {
            var cell = cells[x];
            var add = parseInt(cell.innerHTML);
            if(!isNaN(add)) {      
                sum += add;
                num++;
            }
        }
       
        var average = Math.floor(sum / num);
        if(isNaN(average))
        {
            average=0;
            cells[a].innerHTML=0;
        }
        else{
            cells[a].innerHTML=average;
            cells[a].style.textAlign="right";
            cells[a].style.color="black";
        }
        
        //asigns grades according to averages
        if(average>=93)
        {
           cells[a+1].innerHTML="A-"; cells[a+2].innerHTML="3.7";
        }
        else if(average>=90 && average<=92)
        {
           cells[a+1].innerHTML="A-"; cells[a+2].innerHTML="3.7";
        }
        else if(average>=87 && average<=89)
        {
            cells[a+1].innerHTML="B+";
            cells[a+2].innerHTML="3.3";
        }
        else if(average>=83 && average<=86)
        {
            cells[a+1].innerHTML="B";
            cells[a+2].innerHTML="3.0";
        }
        else if(average>=80 && average<=82)
        {
            cells[a+1].innerHTML="B-";
            cells[a+2].innerHTML="2.7";
        }
        else if(average>=77 && average<=79)
        {
            cells[a+1].innerHTML="C+";
            cells[a+2].innerHTML="2.3";
        }
        else if(average>=73 && average<=76)
        {
            cells[a+1].innerHTML="C";
            cells[a+2].innerHTML="2.0";
        }
        else if(average>=70 && average<=72)
        {
            cells[a+1].innerHTML="C-";
            cells[a+2].innerHTML="1.7";
        }
        else if(average>=67 && average<=69)
        {
            cells[a+1].innerHTML="D+";
            cells[a+2].innerHTML="1.3";
        }
        else if(average>=63 && average<=66)
        {
            cells[a+1].innerHTML="D";
            cells[a+2].innerHTML="1.0";
        }
        else if(average>=60 && average<=62)
        {
            cells[a+1].innerHTML="D-";
            cells[a+2].innerHTML="0.7";
        }
        else if(average<=60)
        {
            cells[a+1].innerHTML="F";
            cells[a+2].innerHTML="0.0";
            cells[a].style.color="white"; 
            cells[a].style.backgroundColor="red";
        }
    }
    
}

//updates the table to give appropriate background colors and calculate averages
function calc(){
    //updates background colours for irst two rows
    var count =0;
    for(var i=1; i<table.rows.length; i++)
    {           
        var cells = rows[i].cells;
        for (var x = 0; x <2; x++) {
            var cell=cells[x];
              if(i%2==0)
                {
                    cell.style.backgroundColor="white";
                }
                else
                {
                    cell.style.backgroundColor="#f2f2f2";
                }
        }
        //updates background colours for last two rows
        for(var x = a+1; x<a+3; x++)
        {
                var cell=cells[x];
                if(i%2==0)
                {
                    cell.style.backgroundColor="white";
                }
                else
                {
                    cell.style.backgroundColor="#f2f2f2";
                }
            
        }
    }
    
    for(var i=1; i<table.rows.length; i++)
    {   
         //checks non number values and updates table depending on content
        
        var cells = rows[i].cells;
        for (var x = 2; x <a+1; x++) {
            var cell=cells[x];
            var p=cell.innerHTML;
            if(p<0||p>100||isNaN(p))
            {
                cell.innerHTML="-";
            }
            if(cell.innerHTML==="-")
            {
                count++;
                document.getElementById("count").innerHTML=count;
                cell.style.textAlign="center"; 
                cell.style.backgroundColor="yellow";
            }
            else{
                 //updates table around numbers
            cell.innerHTML=Math.floor(cell.innerHTML); 
            cell.style.textAlign="right"; 
                if(i%2===0)
                {
                    cell.style.backgroundColor="white";
                }
                else
                {
                    cell.style.backgroundColor="#f2f2f2";
                }
            }
        }
    }
    //calls the average function now that we have eliminated non numbers
    average();   
   
}
    //hides grade information
    var buttons = document.querySelectorAll('.show');
    for(var i = 0; i < buttons.length; i++){
    buttons[i].classList.add('hidden');
}

//toggles between show and hide of grade info columns
var b=false;
function display(){
    if(b){
            var buttons = document.querySelectorAll('.show');
            for(var i = 0; i < buttons.length; i++){
            buttons[i].classList.add('hidden');
            }
        b=false;
    }
    else{
        var buttons = document.querySelectorAll('.show');
            for(var i = 0; i < buttons.length; i++){
            buttons[i].classList.remove('hidden');
            }
        b=true;
    }
}

//highlights a row when clicked
var b2=true;
function highlight(num)
{
    var cells = rows[num].cells;
    for (var x = 0; x <cells.length; x++) 
    {  
        if(b2)
        {
            var cell=cells[x];
            cell.style.backgroundColor="aqua"; 
        }
        else
        {     
            calc();
        }      
    }
    b2=!b2;
}

//highlights a column when clicked
var b3=true;
function light(num)
{
    for( var i=1; i<table.rows.length; i++)
    {  
        var cell = rows[i].cells[num-1];
         
        if(b3){
            cell.style.backgroundColor="aqua";
        }
        else{
            calc();
        }      
    }
    b3=!b3;
}

//deletes a column when delete button clicked
function deleteColumns()
{
    if(a>7)
    {
        a--;
        for (i=0; i<rows.length; i++) {
            var n=rows[i].deleteCell(a);
        }
    }
    calc();
}

//deletes a row when delete button clicked
function deleteRows()
{
     var x = table.rows.length; 
        if(x>11){
            document.getElementById("myTable").deleteRow(table.rows.length-1); 
        }
    calc();
}
       



