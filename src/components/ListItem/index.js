import React, { useState } from 'react'
import './ListItem.css'

const ListItem = ({task, handleRemove, handleOnEdit,id}) => {

    const [onEdit, setOnEdit] = useState(false);
    const [editVal, setEditVal] = useState(task);
    const myRef = React.createRef();

    const onRemove = () => {
        myRef.current.className = "active"
        setTimeout(() => {
            handleRemove();
        }, 200)
    }

    const handleEditValue = (e) => {
        setEditVal(e.target.value)
    }

    const handleEdit = () => {
        setOnEdit(true)
    }

    const handleCancel = () => {
        if(editVal === ""){
            setEditVal(task)
        }
        setOnEdit(false)
    }

    const handleSave = () => {
        if(editVal === ""){
            setEditVal(task)
        }else{
            handleOnEdit(editVal, id)
        }
        setOnEdit(false)
    }

    return(

        <>
            {onEdit ? (
                <li>
                    <input type='text'  
                        value={editVal}
                        name='editVal'
                        id='editVal'
                        onChange={handleEditValue}
                    />
                <div className='row'>
                    <i className='fa fa-save' title='Save' onClick={handleSave}></i>
                    <i className='fa fa-times' title='Cancel' onClick={handleCancel}></i>
                </div>
            </li>
            ) : (
                <li ref={myRef}>
                    {task}
                    <div className='row'>
                        <i className='fa fa-pencil' title='Edit' onClick={handleEdit}></i>
                        <i className='fa fa-trash' title='Delete' onClick={onRemove}></i>
                    </div>
                </li>
            )}
        </>
    )
}
  
export default ListItem