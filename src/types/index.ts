export interface Todo {
    id: string,
    text: string,
    complete: boolean,
}

export type ReducerAction = 'ADD' | 'STATUS_CHANGE';