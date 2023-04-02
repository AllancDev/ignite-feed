import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

import {PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1550254896-f99c8f78ac6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="" 
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/allancdev.png" />
                <strong>Allan Camargo</strong>
                <span>Head Infra</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20}/>Editar seu perfil</a>
            </footer>
        </aside>
    )
}