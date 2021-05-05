import {useState} from 'react';

import { ContainerForm, FormStyle } from './styles';

import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const Form = () => {
  const [dispatchingBody, setDispatchingBody] = useState(null); 


  function handleDispatchingBody(e){
    setDispatchingBody(e);
  }


  return(
    <FormStyle>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Contrate</h3>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <ContainerForm className="row">
              <div className="col-lg-7">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Nome completo</label>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="input-data">
                  <input type="text" required/>
                  <label>E-mail</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>CPF</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>RG</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <Select
                    value={dispatchingBody}
                    onChange={handleDispatchingBody}
                    options={options}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>UF</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Endereço</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>CEP</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Número</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Bairro</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Complemento</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Cidade</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Estado</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Celular</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input type="text" required/>
                  <label>Telefone</label>
                </div>
              </div>
            </ContainerForm>
          </div>
        </div>
      </div>
    </FormStyle>
  )
}

export default Form;
