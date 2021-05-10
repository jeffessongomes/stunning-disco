import { Tab } from "react-bootstrap";

import {
  ContainerBonus,
  Container,
  Nav,
  Card,
  ContainerInfo,
  CardInfo,
} from "./styles";

import Union from "../../assets/img/union.png";

import Cinepolis from "../../assets/img/cinepolis.png";
import Petz from "../../assets/img/petz.png";
import Bk from "../../assets/img/bk.png";
import Riachuelo from "../../assets/img/riachuelo.png";
import img01 from "../../assets/img/img01.png";
import img02 from "../../assets/img/img02.png";
import img03 from "../../assets/img/img03.png";

const Bonus = () => {
  return (
    <Container>
      <img src={Union} alt="União" className="peixe" />
      <ContainerBonus>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Benefícios</h3>
            </div>
            <div>
              <Nav defaultActiveKey="geral" id="nav">
                <Tab eventKey="geral" title="Geral">
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <Card>
                          <img
                            src={Cinepolis}
                            alt="Logo do Cinépolis"
                            loading="lazy"
                          />
                          <p>50% de desconto nos ingressos</p>
                        </Card>
                      </div>
                      <div className="col-3">
                        <Card>
                          <img
                            src={Bk}
                            alt="Logo do Burger King"
                            loading="lazy"
                          />
                          <p>3 woppers grátis</p>
                        </Card>
                      </div>
                      <div className="col-3">
                        <Card>
                          <img src={Petz} alt="Logo do Petz" loading="lazy" />
                          <p>2 banhos e tosas</p>
                        </Card>
                      </div>
                      <div className="col-3">
                        <Card>
                          <img
                            src={Riachuelo}
                            alt="Logo da Riachuelo"
                            loading="lazy"
                          />
                          <p>15% de desconto em roupas de banho</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="fastfood" title="Fast Food">
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <Card>
                          <img
                            src={Bk}
                            alt="Logo do Burger King"
                            loading="lazy"
                          />
                          <p>3 woppers grátis</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="infantil" title="Infantil">
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <Card>
                          <img
                            src={Cinepolis}
                            alt="Logo do Cinépolis"
                            loading="lazy"
                          />
                          <p>50% de desconto nos ingressos</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="educacao" title="Educação">
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <Card>
                          <img
                            src={Riachuelo}
                            alt="Logo da Riachuelo"
                            loading="lazy"
                          />
                          <p>15% de desconto em roupas de banho</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="pets" title="Pets">
                  <div className="container">
                    <div className="row">
                      <div className="col-3">
                        <Card>
                          <img src={Petz} alt="Logo do Petz" loading="lazy" />
                          <p>2 banhos e tosas</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Nav>
            </div>
          </div>
        </div>
      </ContainerBonus>
      <ContainerInfo>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 style={{ paddingTop: "91px" }}>Informações</h3>
            </div>
          </div>
        </div>
      </ContainerInfo>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardInfo>
              <img src={img01} className="cardImage" alt="Casal Feliz e sorridente" loading="lazy" />
              <p>Estamos preparados para receber você e sua família com excelentes espaços</p>
            </CardInfo>
          </div>
          <div className="col-4">
            <CardInfo>
              <img src={img02} className="cardImage" alt="Uma bela piscina" loading="lazy" />
              <p>Piscinas amplas, com atrações para adultos e crianças</p>
            </CardInfo>
          </div>
          <div className="col-4">
            <CardInfo>
              <img src={img03} className="cardImage" alt="Drinks e itens do cardápio" loading="lazy" />
              <p>Temos um excelente cardápio para a sua alimentação</p>
            </CardInfo>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Bonus;
