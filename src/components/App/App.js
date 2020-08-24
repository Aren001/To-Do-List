import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";
import './index.css';
const App = () => {
    const [ todoData, setTodoData ] = useState([
        {id: 1, label: 'Drink Coffee', done: false, important: false },
        {id: 2, label: 'Make Awesome App',done: false, important: true },
        {id: 3, label: 'Have a lunch', done: false,  important: false }
    ]);
    const [search, setSearch] = useState('');
    const [filterr, setFilter] = useState('all');

    const createTotoItem = (label) => {
        return {
            id: todoData.length + 1,
            label,//text-na
            important: false,
            done: false
        }
    };





    const filterItems = () => {
        switch (filterr) {
            case 'active' : return todoData.filter(item => !item.done);break;
            case 'done' : return todoData.filter(item => item.done);break;
            case 'important':return todoData.filter(item => item.important);break;
            default : return todoData;
        }
    };



    // AVELACNELNA APAHOVUM

    const addTodoItem = (text) => {
        if(text){
        setTodoData([
            ...todoData,
            createTotoItem(text)
        ])
    }
    };



    // JNJELU HAMAR

    const deletedItem = (id) => {
        setTodoData(() => {
            const idx = todoData.findIndex(item => item.id === id);
            todoData.splice(idx, 1);
            return [...todoData]
        })
    };



    


    const onToggleImportant = (id) => {
        const idx  = todoData.findIndex(item => item.id === id);
        setTodoData(() => {
            todoData[idx].important = !todoData[idx].important;
            return [...todoData]
        })
    };




    const onToggleDone = (id) => {
        const idx  = todoData.findIndex(item => item.id === id);
        setTodoData(() => {
            todoData[idx].done = !todoData[idx].done;
            return [...todoData]
        })
    };





    const renderTodoItem = () => {
        const visibleItems = filterItems().filter(item => {
            return item.label.toLocaleLowerCase().indexOf(search) > -1
        });
       return visibleItems;
    };






    const toDoCount = todoData.filter(item => item.done).length;
    const doneCount = todoData.length - toDoCount;
    console.log(filterr)

    return (
        <div className="todo-app">

            <AppHeader  toDo={toDoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel
                    onSearch={setSearch}
                />
                <ItemStatusFilter
                    onFilterChange={setFilter}
                />
            </div>

            <TodoList
                todos={renderTodoItem()} //ushadir exi props ogtagorcelu hamara
                onDeleted={(id) => deletedItem(id)}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <ItemAddForm
                onAddTodoItem={addTodoItem}
            />
        </div>
    );
};
export default App;