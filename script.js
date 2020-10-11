let todoText = document.getElementById('todoText')
let todoButton = document.getElementById('todoButton')
let ulList = document.getElementById('ulList')


let taskObj = JSON.parse(localStorage.getItem('localtasker')) || []

  for(let i=0; i < taskObj.length; i++){
    let listOrder = document.createElement('li')
    let cut = document.createElement('button')
    cut.innerText = 'CUT'
    listOrder.innerText = taskObj[i].task
    listOrder.isCompleted = taskObj[i].isCompelted ? true : false
    if(listOrder.isCompleted){
        listOrder.style.textDecoration = 'line-through'
    }
    ulList.appendChild(listOrder)
    listOrder.appendChild(cut)
  }
 
 
todoButton.addEventListener('click', function(e) {
    let listTask = localStorage.getItem('localtasker')
    let taskObj = []
    taskObj = JSON.parse(listTask)
    let listOrder = document.createElement('li')
    let cut = document.createElement('button')
    cut.innerText = 'CUT'
    listOrder.innerText = todoText.value

    if(todoText.value === ''){
        return false
    } else{
        ulList.appendChild(listOrder)
        listOrder.appendChild(cut)
        if(taskObj === null){
            taskObj = []
        }
        taskObj.push(todoText.value);
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtasker", JSON.stringify(taskObj));
        
        todoText.value = ''
    }
    
})
ulList.addEventListener('click', function(e){
   magic(e)
})

function magic(e){
    console.log(e.target.tagName)
    let taskObj = JSON.parse(localStorage.getItem('localtasker'))
    if(e.target.tagName === 'BUTTON'){
        console.log(taskObj)
       e.target.parentElement.remove() 
       taskObj.splice(e, 1) 
       console.log('after',taskObj)
   
   }
   
   localStorage.setItem("localtasker", JSON.stringify(taskObj));
   console.log('oo', taskObj)
   return taskObj
   
   }
   function zlock(e){
       console.log(e.target.tagName)
   }
   
