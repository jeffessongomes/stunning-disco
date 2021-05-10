import { CardPlan } from "./styles";

import { ContainerPlan } from "./styles";

import img1 from "../../assets/img/Img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";

const Plans = () => {
  return (
    <ContainerPlan>
      <div className="container">
        <div className="row">
          <div className="col-8 pr-0">
            <img
              src={img3}
              className="first-img"
              alt="imagem de uma mulher em uma lagoa do Pargos Club"
              loading="lazy"
            />
          </div>
          <div className="col-4 pl-0">
            <img
              src={img1}
              className="img-fluid second-img"
              alt="imagem de uma mulher em uma lagoa do Pargos Club"
              loading="lazy"
            />
          </div>
          <div className="col-8 pr-0">
            <CardPlan>
              <div className="content">
                <h3>Nosso plano</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum.
                </p>
                <div className="containerButtons">
                  <a href="#000" className="cta-left">
                    Contrate já
                  </a>
                  <a href="#FFF" className="cta-right">
                    Benefícios
                  </a>
                </div>
              </div>
            </CardPlan>
          </div>
          <div className="col-4  pl-0">
            <img
              src={img2}
              className="img-fluid third-img"
              alt="imagem de uma mulher em uma lagoa do Pargos Club"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </ContainerPlan>
  );
};

export default Plans;
