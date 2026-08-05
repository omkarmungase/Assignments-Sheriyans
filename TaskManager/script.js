// console.log("hello");


// const inp1 = document.querySelector('#inp1')
// const inp2 = document.querySelector('#inp2')

const form = document.querySelector('form')


const taskbar = document.querySelector('.taskbar')

const taskarr= [];

const ui =()=>{
    taskbar.innerHTML = "";
    taskarr.forEach((elem)=>{
        taskbar.innerHTML += `<div class="tasks">
            <div class="logo"><i class="ri-book-3-line"></i></div>
            <div class="taskdet">
              <h3>${elem.inp1}</h3>
              <p>${elem.inp2}</p>
            </div>
            <div class="buttons">
              <button onclick="edit(${index})"><i class="ri-pencil-line"></i>Edit</button>
              <button onclick="completeTask(${index})"><i class="ri-checkbox-line"></i> Complete</button>
              <button onclick="deleteTask(${index})"><i class="ri-delete-bin-6-line"></i> Delete</button>
            </div>
          </div>`

    })
     

}


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let inp1 = event.target[0].value
    let inp2 = event.target[1].value
    // console.log(inp2);
    if(inp1.trim() ==="" || inp2.trim()===""){ return; }

    let obj = {
        inp1,
        inp2,
        completed:false
    }
    taskarr.push(obj)
    console.log(taskarr);
    

    console.log(inp1.trim());
    
   ui();
    
    // console.log('hell')
    form.reset();
})

const edit= ()=>{
    console.log("hello");
    
}