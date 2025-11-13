import styles from './App.module.css'
import perfil from '/perfil.jpg'
import facebook from '/facebook.jpg'
import instagram from '/instagram.jpg'
import linkedin from '/linkedin.png'
import whatsApp from '/whatsapp.webp'
import foto from '/foto.jpg'

import { useState, useEffect } from 'react'
import { Card } from './components/card'

function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
      fetch('/cardsInfo.json').then(response => response.json())
      .then(data => {
        setDados(data)
      })
  }, [])

  const defaultPhoneNumber = '41984965196'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }


  const handleZap = () => {
    const { name, email, message } = formData

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZap, "_blank")

  }


  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Repositórios</a>
        <a href="#s5">Onde nasci</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.perfil} src={perfil} alt="Perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.titlle}>Ana Beatriz V. De Oliveira</h2>
            <p className={styles.paragraph}>Desenvolvedora iniciante, tenho 15 anos sou
               estudante do 1° ano do ensino médio estou a procura do meu primeiro emprego, sou responsável
              tenho facilidade de fazer as coisas conforme ordens de alguém não tenho problema
               com isso se for preciso trabalho em grupo.
            </p>
          </div>
          <h2></h2>
        </section>

        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
              {dados.map((item) => {
                return(
                  <div key={item.id}> 
                    <Card tec={item.tecnologia} image={item.imagem} text={item.texto}/>
                  </div>
                )
              })}
            
           
          </div>
        </section>


        <section id='s3'>
          <h2>sessao 3</h2>
        </section>

        <section className={styles.s5} id='s5'>

          <h2>Onde nasci</h2>
          <p>Nasci em são Paulo na vila prudente (zona leste) mas meus pais vieram para curitiba quando eu tinha apenas 9 message
            mas eles viveram lá uns 6 anos em São Paulo meu pai era pintor e minha mãe trabalhava em uma farmácia o salário não era muito alto mas eles eram
            bons administradores.
          </p>
          <img className={styles.foto} src={foto} alt="Vila Prudente" />
        </section>

        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Informe seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30 " rows="10" required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>
      </main>

      <footer className={styles.rodape}>
        <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'><img width={80} src={facebook} alt="Facebook" /></a>
        <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagram} alt="Instagram" /> </a>
        <a href="https://www.linkedin.com/" target='_blank' rel='noopener noreferrer'> <img width={70} src={linkedin} alt="Linkedin" /> </a>
        <a href="https://www.whatsApp.com/" target='_blank' rel='noopener noreferrer'> <img width={80} src={whatsApp} alt="WhatsApp" /> </a>
      </footer>
    </>
  )
}
export default App
