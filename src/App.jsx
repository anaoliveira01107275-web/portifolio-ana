import styles from './App.module.css'
import perfil from '../imagem/perfil.jpg'

function App() {

  return (
    <>
       <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Vídeos</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={styles.s1}id='s1'>
          <div className={styles.left}>
            <img className={styles.perfil} src={perfil} alt="Perfil"/>
          </div>
          <div className={styles.right}>
            <h2 className={styles.titlle}>Ana Beatriz V. De Oliveira</h2>
            <p className={styles.paragraph}>Desenvolvedora iniciante, tenho 15 anos sou estudante do 1° ano do ensino médio estou a procura do meu primeiro emprego, sou responsável 
              tenho facilidade de fazer as coisas conforme ordens de alguém não tenho problema com isso se for preciso trabalho em grupo.
            </p>
          </div>
          <h2></h2>
        </section>

        <section id='s2'>
          <h2>sessao 2</h2>
        </section>

        <section id='s3'>
          <h2>sessao 3</h2>
        </section>

        <section id='s4'>
          <h2>sessao 4</h2>
        </section>
      </main>
  
    </>
  ) 
}
export default App
