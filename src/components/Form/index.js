import {useState} from 'react';
import { useFormik } from 'formik';

import { ContainerForm, FormStyle } from './styles';

import { Button } from '../../fragments/Button/styles';

import Cards from '../../assets/img/cards.png';

import Select from 'react-select';

import InputMask from 'react-input-mask-format';

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

import {dispatchingBody as options, UF as optionsUF} from './options';

const Query = gql`
  query{
    plans{
      nodes {
        id
        name
        value
      }
    }
  }
`;

const Form = () => {
  const [dispatchingBody, setDispatchingBody] = useState('');
  const [uf, setUf] = useState('');
  const { data } = useQuery(Query);


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
      openCheckout(values)
    },
  })


  function openCheckout(e) {
    // eslint-disable-next-line no-undef
    let checkout = new PagarMeCheckout.Checkout({
      encryption_key: "ek_test_gWJveJaFCNOXx16pl0W6noklRlm514",
      success: function(data) {
        alert('Cartão clonado com sucesso! Obrigado pela preferência. Volte sempre!');
      },
      error: function(err) {
        alert('Meu Deus do céu, Berg :(')
      },
      close: function() {
      }
    });

    checkout.open({
      amount: data?.plans?.nodes[0].value,
      createToken: 'true',
      paymentMethods: 'credit_card',
      customerData: false,
      customer: {
        external_id: '#123456789',
        name: formik.values.name,
        type: 'individual',
        country: 'br',
        email: formik.values.email,
        documents: [
          {
            type: 'cpf',
            number: formik.values.cpf,
          },
        ],
        phone_numbers: [formik.values.celular, formik.values.telefone !== '' ? formik.values.telefone : '+5599999999999'],
      },
      billing: {
        name: formik.values.name,
        address: {
          country: 'br',
          state: formik.values.estado,
          city: formik.values.cidade,
          neighborhood: formik.values.bairro,
          street: formik.values.endereco,
          street_number: formik.values.numero,
          zipcode: formik.values.cep
        }
      },
      items:[ 
        {
          id: data?.plans?.nodes[0].id,
          title: data?.plans?.nodes[0].name,
          unit_price: data?.plans?.nodes[0].value,
          quantity: 1,
          tangible: false
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
                  <InputMask 
                    mask="+55 99 99999 9999" 
                    required
                    maskPlaceholder=""    
                    value={formik.values.celular}
                    id="celular"
                    name="celular"
                    onChange={formik.handleChange}
                  />
                  <label>Celular</label>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-data">
                  <InputMask 
                    mask="+55 99 99999 9999" 
                    required
                    maskPlaceholder=""    
                    value={formik.values.telefone}
                    id="telefone"
                    name="telefone"
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
              type="button"
              onClick={formik.handleSubmit}
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
