import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/AloisSailer.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alois Sailer</strong>
              <time title="13 de agosto 2022 às 21:22h" dateTime="2022-08-13 21:22:45">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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