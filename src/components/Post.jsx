import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/AloisSailer.png" />
          <div className={styles.authorInfo}>
            <strong>Alois Sailer</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="13 de agosto 2022 às 21:22h" dateTime="2022-08-13 21:22:45">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}