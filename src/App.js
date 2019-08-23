import React from 'react';
import './App.css';
import Display from './components/Display'
import Multiply from './components/Multiply'

export default function TodoApp() {
    return (
        <div className="todo-app">
        <h1>Counter</h1>
        <Display />
        <Multiply />
        </div>
    );
}
