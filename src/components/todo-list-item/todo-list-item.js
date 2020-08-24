import React, {useState} from 'react';

import './todo-list-item.css';

const TodoListItem = ({
                        label,
                        done,
                        important,
                        onDeleted,
                        onToggleImportant,
                        onToggleDone,
                      }) => {
  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span
        className={`todo-list-item ${done ? 'done': ''}`}

    >
      <span
        className="todo-list-item-label"
        style={important ? style : {}}
        onClick={() => {

          onToggleDone()
        }}
      >
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={() => {

                onToggleImportant()
              }}
      >
        <span style={{fontSize:"15px"}}>IMP</span>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}
      >
       <span style={{fontSize:"15px"}}>DEL</span>
      </button>
    </span>
  );
};

export default TodoListItem;
