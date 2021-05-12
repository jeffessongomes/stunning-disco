import { ContainerAssociated } from './styles';

import Detail from '../../assets/img/detail.png';

const Associated = () => {
  return(
    <ContainerAssociated>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9 col-12">
            <div className="content">
              <img src={Detail} alt="Imagem de um detalhe" loading="lazy" />
              <div className="text">
                <h2>
                  Seja nosso associado!
                </h2>
                <p>
                  Seja nosso associado e ganhe benefícios exclusivos.
                </p>
                <a href="#aaa">
                  Contrate já!
                </a>
              </div>
              <img src={Detail} className="right" alt="Imagem de um detalhe" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </ContainerAssociated>
  )
}

export default Associated;
