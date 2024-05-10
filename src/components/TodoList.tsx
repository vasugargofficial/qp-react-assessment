
import { memo } from "react";
import { Card, CardBody, Checkbox } from "@nextui-org/react"
import { FixedSizeList } from "react-window";
import { Todo } from "@/types";

function TodoList({ todos, handleStatusChange }: { todos: Todo[]; handleStatusChange: Function }) {

    const renderTask = ({ index, style }: any) => {
        const todo = todos[index];
        return <div style={style}>
            <Card className="p-1 m-2" key={todo.id}>
                <CardBody>
                    <Checkbox
                        color="default"
                        isSelected={todo.complete}
                        lineThrough={todo.complete}
                        onChange={() => handleStatusChange(todo)}
                    >
                        {todo.text}
                    </Checkbox>
                </CardBody>
            </Card>
        </div>
    }

    return <FixedSizeList
        className="custom-scrollbar"
        height={700}
        width={'50%'}
        itemCount={todos.length}
        itemSize={65}
        itemData={todos}
        itemKey={(index, data: Todo[]) => data[index].id}
    >
        {renderTask}
    </FixedSizeList>
}

export default memo(TodoList);