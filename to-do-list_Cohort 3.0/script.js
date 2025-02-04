let currentIndex=1;
function Add(){
    const inputEL=document.getElementById("inp");
    const textNode=document.createElement("div");
    textNode.innerHTML="<div id='todo-" + currentIndex + "'><h4>" +currentIndex +"."+ inputEL.value + '</h4><button onclick="deleteTodo(' + currentIndex + ') ">Delete</button>';
    
    const parentEL=document.getElementById("todo-list");
    parentEL.appendChild(textNode);
    
    currentIndex = currentIndex + 1;
    console.log(currentIndex)

}

function deleteTodo(index){
    const element=document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
    currentIndex = currentIndex - 1;
    console.log(currentIndex)
}