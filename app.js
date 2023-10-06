function press(e){
    document.getElementById('input').value += e;
    
 }
 
 function eq(){
     var a = document.getElementById('input')
     a.value = eval(a.value)
 }
 
 function clr(){
     document.getElementById('input').value = ''
 }
 
 function del(){
     var a = document.getElementById('input')
     a.value = a.value.slice(0, -1)
 }
 
 function mod(){
     var a=document.getElementById('input')
     a.value= a.value+='%'
         
 }
 