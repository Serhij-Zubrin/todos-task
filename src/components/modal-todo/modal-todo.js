import React from 'react'
import TodoCreate from './todo-create';
import TodoChange from './todo-change'
import { useSelector } from 'react-redux';

function ModalTodo() {
    const state = useSelector(state => state);
    const { modalReducer: { isShow, todoBtn } } = state;

    const сhoiceModal = (btn) => {
        switch (btn) {
            case 'create':
                return true;
            case 'change':
                return false
        }
    };

    if (сhoiceModal(todoBtn)) {
        return (<TodoCreate
            show={isShow}
        />)
    }

    return (<TodoChange
        show={isShow}
    />)
}

export default ModalTodo
