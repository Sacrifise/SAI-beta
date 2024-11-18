import React from "react";
import { useEffect, useState } from "react";


const ContainerTodo = () => {
    return(
        <div className="container-item todobox hover">todo
            <div className='todobox-input'>
                <form className="form" action="" method="post">
                    <label for="name"> Your todo</label>
                    <input type="text" placeholder="new todo" id = "new-todo" className="todo-input"/>
                </form>
            </div>
                <div className='todobox-label '>
                <ul className='todolist'>
                    <li className="todoli">HI BABE</li>
                    <li className="todoli">FucK u</li>
                    <li className="todoli">HI THERE</li>
                </ul>
                </div>
      </div>
    )
}

export default ContainerTodo;