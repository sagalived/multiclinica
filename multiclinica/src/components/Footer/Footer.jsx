
import './footer.css'

const Footer = () => {

  const socials =[
    {
      id:1,
      img:'/public/assets/icons/FACE.svg',
      nome:"Logo do facebook",
      path:'',
    },
    {
      id:2,
      img:'/public/assets/icons/INSTA.svg',
      nome:"Logo do instagram",
      path:'',
    },
    {
      id:3,
      img:'/public/assets/icons/TELEFONE.svg',
      nome:"Imagem de um telefone",
      path:'',
    },
    {
      id:4,
      img:'/public/assets/icons/WHATS.svg',
      nome:"Logo do whatsapp",
      path:'',
    }
  ]
  
  return (
    <>
    <section className="footer__container">
      <div>
        <img className='logo__footer' src='/public/assets/logoMaior.png' alt="Logo Multiclinica" />
      </div>

    <section className='footer__adress'>
      <div className="adress">
        <h2>Endereço</h2>
        <p>Rua Guaratinguetá, 60. Parangaba. 
        Fortaleza - Ceará - Brasil.
        Cep: 60710-180
        </p>
      </div>    

      <div className="contact">
        <h2>TELE ATENDIMENTO</h2>
        <p>85 3048.5850 - 85 3048.5802
        85 3048.5801 - 85 3048.5803
        </p>
      </div>   

      <div className="socials">
        <h2>Redes Sociais</h2>

        <div className='icons' >
          {socials.map(({img, path,nome,id}) =>(
            <>
            <ul key={id}>
            <li><a href={path}><img src={img} alt={nome} /></a></li>
            
            </ul>
            </>
          ))}
        </div>       
       
      </div>  
      </section>

      <section className='copyright'>
          <img src='/public/assets/icons/Line 1.svg' alt='imagem de uma linha horizontal' />
         <p>© 2022 MULTICLINICA FORTALEZA LTDA. CNPJ 01.373.946/0001-66. TODOS OS DIREITOS RESERVADOS.</p>
        </section>

    </section>
    </>
  )
}

export default Footer