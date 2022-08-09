import { Header } from './assets/components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Alois Sailer"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam amet vel totam voluptates debitis nesciunt quos corrupti! Accusantium laudantium ipsa vitae ratione, amet adipisci facilis nisi, corporis placeat, et quas?"
      />
      <Post
        author="Stephan Espíndola"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam amet vel totam voluptates debitis nesciunt quos corrupti!"
      />
    </div>
  )
}
