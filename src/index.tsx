import React, { Fragment, useState, FormEvent } from 'react'
import ReactDOM from 'react-dom'

type FormElement = FormEvent<HTMLFormElement>

interface ITodo {
  text: string,
  complete: boolean
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])
  
  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value)
    setValue('')
  }

  const addTodo = (text:string):void => {
    const newTodos: ITodo[] = [...todos, {text, complete: false}]
    setTodos(newTodos)
  }

  const completeTodo = (i:number):void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[i].complete = !newTodos[i].complete
    setTodos(newTodos)
  }

  const removeTodo = (i:number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(i,1)
    setTodos(newTodos)
  }

  return (
    <Fragment>
      <h2>React Typescript Todolist</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {
          todos.map((todo:ITodo, i:number) => {
            return (
              <>
                <p key={i} >{todo.text}</p>
                <button type='button' onClick={() => completeTodo(i)} >{todo.complete ? 'Incomplete' : 'complete'}</button>
                <button type='button' onClick={() => removeTodo(i)} >&times;</button>
              </>
            )
          })
        }
      </div>
    </Fragment>
  )
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)
