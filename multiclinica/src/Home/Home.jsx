import React from 'react'
import './home.css'
import Card from '../components/Cards/Card'


const Home = () => {
  return (
    <>
    <section className='home__container'>
     
        <img className='logo' src="/public/assets/logoMaior2.png" alt="Logo da Multiclinica"/>
        <div className='text'>
        <p>Bem-vindo à nossa clínica, onde cuidar da sua saúde é a nossa principal prioridade. Nossa equipe de profissionais altamente qualificados e dedicados está pronta para oferecer uma ampla gama de serviços médicos e exames de diagnóstico para atender às suas necessidades.</p>
        </div>
    </section>

    <section className='cards'>
    <Card />
    </section>
    </>
  )
}

export default Home