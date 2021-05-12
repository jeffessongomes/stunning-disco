import {useState} from 'react';
import { useFormik } from 'formik';

import { ContainerForm, FormStyle } from './styles';

import { Button } from '../../fragments/Button/styles';

import Cards from '../../assets/img/cards.png';

import Select from 'react-select';

import InputMask from 'react-input-mask-format';

import {dispatchingBody as options, UF as optionsUF} from './options';


const Form = () => {
  const [dispatchingBody, setDispatchingBody] = useState('');
  const [uf, setUf] = useState('');

  function openCheckout(e) {
    // eslint-disable-next-line no-undef
    let checkout = new PagarMeCheckout.Checkout({
      encryption_key: "ek_test_gWJveJaFCNOXx16pl0W6noklRlm514",
      success: function(data) {
        alert(JSON.stringify(data));
      },
      error: function(err) {
        alert(JSON.stringify(err));
      },
      close: function() {
        alert("The modal has been closed.");
      }
    });

    checkout.open({
      amount: 8000,
      createToken: 'true',
      paymentMethods: 'credit_card',
      customerData: false,
      customer: {
        external_id: '#123456789',
        name: 'Fulano',
        type: 'individual',
        country: 'br',
        email: 'fulano@email.com',
        documents: [
          {
            type: 'cpf',
            number: '71404665560',
          },
        ],
        phone_numbers: ['+5511999998888', '+5511888889999'],
        birthday: '1985-01-01',
      },
      billing: {
        name: 'Ciclano de Tal',
        address: {
          country: 'br',
          state: 'SP',
          city: 'São Paulo',
          neighborhood: 'Fulanos bairro',
          street: 'Rua dos fulanos',
          street_number: '123',
          zipcode: '05170060'
        }
      },
      items: [
        {
          id: '1',
          title: 'Bola de futebol',
          unit_price: 1,
          quantity: 1,
          tangible: true
        }
      ]
    });
  }

  function handleDispatchingBody(e){
    formik.values.orgaoemissor = e.value;
    setDispatchingBody(e);

  }

  function handleUf(e){
    formik.values.uf = e.value;
    setUf(e);
  }

  const formik = useFormik({
    initialValues: {
      cpf: '',
      name: '',
      email: '',
      rg: '',
      endereco: '',
      orgaoemissor: '',
      uf: '',
      cep: '',
      numero: '',
      bairro: '',
      complemento: '',
      cidade: '',
      estado: '',
      celular: '',
      telefone: '',
    },
    

    onSubmit: values => {
      console.log(values);
      openCheckout(values)
    },
  })


  return(
    <FormStyle onSubmit={formik.handleSubmit}>
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
                  <input 
                    type="text" 
                    required
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    id="name"
                  />
                  <label>Nome completo</label>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="input-data">
                  <input 
                    type="text" 
                    required
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <label>E-mail</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <InputMask 
                    mask="999-999-999-99" 
                    required
                    maskPlaceholder=""    
                    value={formik.values.cpf}
                    id="cpf"
                    name="cpf"
                    onChange={formik.handleChange}
                  />
                  <label>CPF</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input 
                    type="text" 
                    required
                    value={formik.values.rg}
                    onChange={formik.handleChange}
                    name="rg"
                    id="rg"
                  />
                  <label>RG</label>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="input-select">
                  <Select
                    
                    options={options}
                    className="basic-single"
                    classNamePrefix="select"
                    name="orgaoemissor"
                    id="orgaoemissor"
                    value={dispatchingBody}
                    onChange={handleDispatchingBody}

                    placeholder="ÓRGÃO EMISSOR"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="input-select">
                  <Select
                    options={optionsUF}
                    className="basic-single"
                    classNamePrefix="select"
                    name="uf"
                    id="uf"
                    placeholder="UF"
                    required
                    value={uf}
                    onChange={handleUf}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="input-data">
                  <input 
                    type="text" 
                    required
                    name="endereco"
                    id="endereco"
                    value={formik.values.endereco}
                    onChange={formik.handleChange}
                  />
                  <label>Endereço</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input 
                    type="text" 
                    required
                    name="cep"
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    id="cep"
                  />
                  <label>CEP</label>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="input-data">
                  <input 
                    type="text" 
                    required
                    name="numero"  
                    id="numero"
                    value={formik.values.numero}
                    onChange={formik.handleChange}
                  />
                  <label>Número</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input 
                    type="text" 
                    required
                    name="bairro"
                    id="bairro"
                    value={formik.values.bairro}
                    onChange={formik.handleChange}
                  />
                  <label>Bairro</label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="input-data">
                  <input 
                    type="text"
                    required
                    name="complemento"
                    id="complemento"
                    value={formik.values.complemento}
                    onChange={formik.handleChange}
                  />
                  <label>Complemento</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input 
                      type="text"
                      required
                      name="cidade"
                      id="cidade"
                      value={formik.values.cidade}
                      onChange={formik.handleChange}
                    />
                  <label>Cidade</label>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="input-data">
                  <input 
                    type="text"
                    required
                    name="estado"
                    id="estado"
                    value={formik.values.estado}
                    onChange={formik.handleChange}
                  
                  />
                  <label>Estado</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input 
                    type="text"
                    required
                    name="celular"
                    id="celular"
                    value={formik.values.celular}
                    onChange={formik.handleChange}
                  
                    />
                  <label>Celular</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <input 
                  type="text"
                  required
                  name="telefone"
                  id="telefone"
                  value={formik.values.telefone}
                  onChange={formik.handleChange}
                  />
                  <label>Telefone</label>
                </div>
              </div>
            </ContainerForm>
          </div>
        </div>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <img src={Cards} alt="Cartões de credito" style={{marginTop: '40px'}} loading="lazy" />
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-end button">
            <Button 
              type="submit"
            >
              Contrate Já
            </Button>
          </div>
        </div>
      </div>
    </FormStyle>
  )
}

export default Form;
