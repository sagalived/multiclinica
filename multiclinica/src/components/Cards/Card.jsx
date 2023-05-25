import React from 'react';
import { CCard, CCardImage, CCardBody, CButton, CCardTitle, CCardText } from '@coreui/react';
import './card.css';

const Card = () => {
  const cards = [
    {
      id: 1,
      nome: "SERVIÇOS",
      description: "Oferecemos uma variedade de serviços médicos abrangentes, visando proporcionar o melhor cuidado para você e sua família. Nossos médicos especialistas estão disponíveis para consultas, realizando um diagnóstico preciso e fornecendo tratamentos personalizados.",
      title: "Especialidades",
      path: "/especialidades",
      img: "/public/assets/serviços.png"
    },
    {
      id: 2,
      nome: "CLÍNICA GERAL",
      description: "Todos os atendimentos da clínica como consultas, exames e pequenos procedimentos deverão ser previamente agendados através do nosso TELE ATENDIMENTO ou através de marcação presencial na própria clínica. Nosso objetivo é ajudá-lo a alcançar e manter um estilo de vida saudável.",
      title: "Agendar Consultas",
      path: "/agendar-consultas",
      img: "/public/assets/clinicaGeral.png"
    },
    {
      id: 3,
      nome: "EXAMES",
      description: "Nossa clínica também oferece uma variedade de exames de diagnóstico, utilizando equipamentos modernos e tecnologia avançada. Esses exames desempenham um papel fundamental na identificação precoce de doenças e auxiliam nossos médicos no planejamento do tratamento adequado.",
      title: "Agendar Exame",
      path: "/agendar-exames",
      img: "/public/assets/exames.png"
    },
  ];

  const handleButtonClick = (path) => {
    window.location.href = path; // Redireciona o navegador para a página especificada
  };

  return (
    <div className="card__container">
      {cards.map(({ nome, description, title, path, img }) => (
        <CCard className="card__content" key={title}>
          <CCardImage className="image" orientation="top" src={img} />
          <CCardBody>
            <CCardTitle className='nome'>{nome}</CCardTitle>
            <CCardText className='texto'>
              {description}
            </CCardText>
            <CButton className='button' onClick={() => handleButtonClick(path)}>
              {title}
            </CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  );
};

export default Card;
