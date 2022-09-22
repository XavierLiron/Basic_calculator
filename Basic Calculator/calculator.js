let output= document.querySelector('#display')
function show(num){
output.value+=num;}
function calc() {
    try{ output.value= eval(output.value);}
catch {confirm("enter valid method");}
}
function del(){
    output.value=output.value.slice(0,-1);
}
function clr(){
    output.value= null;
}