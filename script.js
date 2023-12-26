let addtask=document.getElementById("task");
let add=document.getElementById("add");
let empty=document.getElementById("empty");
let tasklist=document.getElementById("tasklist");
let priority=document.getElementById("priority");

addtask.addEventListener("click",(e)=>{
    e.target.style.backgroundColor="white";
})
add.addEventListener("click",(e)=>{
    add.className="newtasks"
    if(addtask.value==""){
        addtask.style.backgroundColor = `rgba(255, 0, 0, 0.219)`;
        return;
      } 
      else {
        let newTask = document.createElement("li");
        newTask.className="list";
        newTask.classList="mylist"
        newTask.innerHTML = `
            <h2>${addtask.value}</h2>
            <span>${priority.value}</span>
            <button onclick="complete(this)">Completed</button>
            <button onclick="Deletetask(this)">Delete</button>`
        tasklist.appendChild(newTask);
        addtask.value = "";
    }
})

function  complete(myBtn){
    let parentSpan = myBtn.parentElement; // get the parent element of button clicked on it will be li tag
    let h2=parentSpan.getElementsByTagName("h2");
    // console.log(h2[0]);
    h2[0].style.textDecoration = "line-through";
  parentSpan.style.backgroundColor = "lightGrey";
  parentSpan.style.borderColor = "darkGray";
  myBtn.style.backgroundColor = "DarkGray";
  myBtn.disabled=true;

  let counter=0;
  if(myBtn.disabled=="true"){
    counter=counter+1;
  }
  console.log(counter);
}


function Deletetask(btn){
    let deletebutton=btn.parentElement;
    deletebutton.remove();
}


