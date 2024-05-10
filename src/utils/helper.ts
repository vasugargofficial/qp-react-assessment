import { ReducerAction, Todo } from "@/types";

export function createDummyTasks():Todo[] {
    return Array.from({ length: 10000 }, (item, index) => {
        return {
            id: Math.random().toString(),
            text: `It is a Task number ${index + 1}`,
            complete: false,
        }
    });
}

export const reducer = (state: any, action: { type: ReducerAction; todo: Todo; }) => {
    switch(action.type) {
        case 'ADD':
            return [action.todo].concat(state);
        case 'STATUS_CHANGE':
            return state.map((todo: Todo) => {
                if (todo.id === action.todo.id) {
                    return {...todo, complete: !todo.complete};
                } else return todo;
            });
        default:
            return state;
    }
}