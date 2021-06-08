import axios from "axios"

export const createAccount = (state,{email,password,name}) =>{
    axios.post('https://celt-86a67-default-rtdb.firebaseio.com/students.json', {
        email,
        password,
        name
      })
     
      
}
export const createTodo = (state,{time,title,name}) =>{
    axios.post('https://celt-86a67-default-rtdb.firebaseio.com/todo.json', {
        time,
        title,
        name
      })  
}


export const getTodo =(state)=>{
    state.todos = []
    axios.get("https://celt-86a67-default-rtdb.firebaseio.com/todo.json")
        .then(response=>{
            for(let key in response.data){
                state.todos.push(response.data[key])
            }
        })
}
export const getAccounts =(state)=>{
    axios.get("https://celt-86a67-default-rtdb.firebaseio.com/students.json")
        .then(response=>{
            for(let key in response.data){
                state.students.push(response.data[key])
            }
        })
}

export const setCorrect = (state,payload)=>{
    state.correct = payload
}

export const setCorrectUser = (state,{email,password}) =>{
    state.correctEmail = email
    state.correctPass = password
}

export const setCorrectName = (state,payload)=>{
    state.correctName = payload
}