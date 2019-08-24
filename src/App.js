import React from 'react';
import './App.css';
import Display from './components/Display'
import Controls from './components/Controls'
import Multiply from './components/Multiply'
import Reset from './components/Reset'

export default function TodoApp() {
    return (
        <div class="container">
        <h1 class="text-center">Counter</h1>
        <Display />
        <Controls />
        <Multiply />
        <Reset />
        </div>
    );
}
