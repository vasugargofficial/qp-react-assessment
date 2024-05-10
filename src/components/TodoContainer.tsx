import { Todo } from "@/types";
import { createDummyTasks, reducer } from "@/utils/helper";
import { Input } from "@nextui-org/react";
import { useReducer, useState, useCallback } from "react";
import TodoList from "./TodoList";

export default function TodoContainer() {
    const [todos, dispatch] = useReducer(reducer, createDummyTasks());
    const [currentTodo, setCurrentTodo] = useState('');
    const completedCount = todos.filter((todo: Todo) => todo.complete).length;
    const pendingCount = todos.length - completedCount;

    function addTodo() {
        if (currentTodo.trim().length) {
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                text: currentTodo.trim(),
                complete: false,
            };
            dispatch({ type: 'ADD', todo: newTodo });
            setCurrentTodo('');
        }
    }

    const handleStatusChange = useCallback((todo: Todo) => {
        dispatch({ type: 'STATUS_CHANGE', todo });
    }, []);

    return <div className="flex flex-col items-center bg-gradient-to-r from-slate-200 to-slate-300" >
        <Input
            className="mt-6 mx-4 w-1/2"
            autoFocus
            value={currentTodo}
            label="Add a task"
            description="Press Enter to Add Task"
            onChange={(e) => setCurrentTodo(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' && addTodo())}
        />
        <div className="flex justify-between w-1/2 p-4">
            <p className="font-bold">Completed: {completedCount}</p>
            <p className="font-bold">Todo: {pendingCount}</p>
        </div>
        <TodoList todos={todos} handleStatusChange={handleStatusChange} />
    </div>
}