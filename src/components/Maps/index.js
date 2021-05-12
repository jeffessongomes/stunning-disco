import {useState} from 'react';

import { Container } from "./styles";

import Local from "../../assets/img/icon1.png";
import Seta from "../../assets/img/seta.png";
import Tel from "../../assets/img/tel.png";
import Clock from "../../assets/img/clock.png";

const Maps = () => {
  const [linkMap, setLinkMap] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.920354613009!2d-35.23784918463897!3d-5.578791995955314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3a0bf39b8818f%3A0x87a76e1dbcf3306d!2sPargos%20Clube%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1620673923914!5m2!1spt-BR!2sbr');

  function handleMap(link){
    setLinkMap(link);
  }

  return (
    <Container>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <iframe
              className="map"
              title="mapa"
              src={linkMap}
            ></iframe>
          </div>
        </div>
        <div style={{ marginTop: "-250px" }}>
          <div className="container info">
            <div className="row banner contentInfo">
              <div className="col-lg-3 col-12 local">
                <h3>
                  Nossa <br /> Localização
                </h3>
              </div>
              <div className="col-lg-7 col-12 containerBlue d-flex">
                <div style={{ paddingTop: "37px", paddingBottom: "32px" }}>
                  <div className="d-flex align-items-center">
                    <img src={Local} alt="Símbolo de localização" />
                    <div>
                      <p style={{cursor: 'pointer'}} onMouseEnter={() => handleMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.920354613009!2d-35.23784918463897!3d-5.578791995955314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3a0bf39b8818f%3A0x87a76e1dbcf3306d!2sPargos%20Clube%20Brazil!5e0!3m2!1spt-BR!2sbr!4v1620673923914!5m2!1spt-BR!2sbr')} className="mb-0">RN-306, 36, Ceará-Mirim - RN</p>
                      <p style={{cursor: 'pointer'}} onMouseEnter={() => handleMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.5910675337973!2d-38.66687708464463!3d-3.680129897322317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c1933d2f19a753%3A0x925cf9c1ec931280!2sPargos%20Club%20do%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1620843173873!5m2!1spt-BR!2sbr')} className="mb-0">Rua Francisco de Sousa Oliveira, 200, Icaraí, Caucaia - Fortaleza - CE</p>
                      <p style={{cursor: 'pointer'}} onMouseEnter={() => handleMap('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5291522192797!2d-48.48357128464824!3d-1.4565571989377388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e816bf363c9%3A0xded33660e81a9f84!2sPargos%20Clube%20Salinas%2FPa!5e0!3m2!1spt-BR!2sbr!4v1620843422477!5m2!1spt-BR!2sbr')} className="mb-0">Av. Conselho Furtado, 1914, Nazaré - Belém - PA</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-lg-1 justify-content-between clockAndPhone">
                    <div className="d-flex align-items-center">
                      <img src={Clock} alt="Desenho de um relógio" />
                      <div className="clock">
                        <p className="mb-0">SEG a SEX: Das 08h00 às 17h30</p>
                        <p className="mb-0">SÁB e DOM: Das 08h00 às 18h00</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center ml-lg-5">
                      <img src={Tel} alt="Desenho de um telefone" />
                      <p className="mb-0">(84) 3201.2617</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 d-flex align-items-center containerBlue pb-4 pb-lg-0">
                <div className="d-flex align-items-center">
                  <img
                    src={Seta}
                    alt="desenho de uma seta"
                    style={{ marginRight: "10px" }}
                  />
                  <a href="https://goo.gl/maps/4jWSWepUFhq8zJGt9">
                    COMO CHEGAR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Maps;
