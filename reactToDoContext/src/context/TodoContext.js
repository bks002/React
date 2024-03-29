import { Context, createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {id: 1,
        todo: "todo msg",
        completed: false,
    }],
    addTodo: (todo) => {},
    deleteTodo : (id,todo) => {},
    updateTodo :(id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider