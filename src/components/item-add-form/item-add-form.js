import React, { useRef } from 'react';
import './item-add-form.css';



const ItemAddForm = ({onAddTodoItem}) => {

    const inputAdd = useRef(null);


    const handleGetInputValue = () => {
        onAddTodoItem(inputAdd.current.value);
        inputAdd.current.value = ''
    };




    return (
        <div className={'item-add-form d-flex'}>
            <input
                className={'form-control'}
                type={'text'}
                placeholder={'add item'}
                ref={inputAdd}
            />
            <button
                onClick={handleGetInputValue}
                className={'btn btn-outline-secondary'}
            >
                add todo item
            </button>
        </div>
    )
}
export default ItemAddForm;