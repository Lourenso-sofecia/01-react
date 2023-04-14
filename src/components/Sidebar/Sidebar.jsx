import { PencilLine } from 'phosphor-react';

import { Avatar } from '../Avatar/Avatar';
import styles from './Sidebar.module.css';
import coca from '../../assets/coca-cola.png'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src={coca} 
                className={styles.cover}
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/lourenso-sofecia.png" />
               <strong>Lourenço Sofécia</strong>
               <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}