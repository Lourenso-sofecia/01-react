import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lourenso-sofecia.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Lourenço Sofécia
                            </strong>
                            <time title="14 de Abril às 12h:00m" dateTime="2022-04-14">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Clinton, parabéns!! </p>

                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}