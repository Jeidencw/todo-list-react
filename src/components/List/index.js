import ListItem from '../ListItem'
import "./List.css"

const List = ({task, onDelete, onEdit,count}) => {

    return(
        <>
            <ul>
                {task.map((item, index) => (
                    <ListItem 
                        task={item.task} 
                        key={index} 
                        handleRemove={() => {onDelete(index)}} 
                        handleOnEdit={onEdit}
                        id={index}
                    />
                ))}
            </ul>

            <h2>Você tem {count} tarefa{count > 1 ? "s" : ""}</h2>
        </>
    )
}

export default List
