import aboutImage from '../../assets/img/about.png';

import {
  Img, AboutContainer
} from './styles'

const About = () => {
  return (
    <div className="container" id="sobre">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <Img className="img-fluid" src={aboutImage} loading="lazy" alt="Imagem sobre um rio do Pargos Club" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <AboutContainer>
            <h2>Sobre o Pargos Club</h2>
            <p>
              Somos uma empresa com mais de 50 anos no mercado, só aqui no RN estamos a
              29 anos localizados na praia de porto mirim a 25 km de natal no litoral
              norte, contamos com uma área verde maravilhosa, 3 piscinas naturais, uma
              área de lazer completa com hospedagem e um riacho na qual o mesmo passa
              dentro do complexo, além de termos 3 atrações diferencias como skybunda,
              aerobunda, kamicaze e um parque aquático cujo o mesmo esta em
              desenvolvimento, temos pronto uma piscina infantil repleta de atrações
              para você desfrutar de todo conforto com sua família.
            </p>
          </AboutContainer>  
        </div>
      </div>
    </div>
  );
};

export default About;
