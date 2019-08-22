import React from 'react';
import './App.css';
import Display from './components/Display'
import Controls from './components/Controls'

export default function TodoApp() {
    return (
        <div className="todo-app">
        <h1>Counter</h1>
        <Display />
        <Controls />
        </div>
    );
}
