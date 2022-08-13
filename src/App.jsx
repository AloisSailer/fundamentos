import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alois Sailer"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam amet vel totam voluptates debitis nesciunt quos corrupti! Accusantium laudantium ipsa vitae ratione, amet adipisci facilis nisi, corporis placeat, et quas?"
          />
          <Post
            author="Stephan Espíndola"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam amet vel totam voluptates debitis nesciunt quos corrupti!"
          />
        </main>
      </div>
    </div>
  )
}
