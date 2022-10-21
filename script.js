const form = document.getElementById('form')
const input = document.getElementById('input')
const todos= document.getElementById('to-do')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const todo = input.value
    if(todo){
        const todoEl = document.createElement('li')
        todoEl.innerText = todo
        const todoDel = document.createElement('button')
        todoDel.innerText = 'x'
        todoDel.setAttribute('id','del')
        todos.appendChild(todoEl)
        todoEl.appendChild(todoDel)
        
        input.value = ''
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed')
        })
        todoDel.addEventListener('click', (e)=>{
            e.preventDefault()
            todoEl.remove()
            todoDel.remove()
        })
    }

   
})