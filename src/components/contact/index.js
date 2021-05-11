import { useFormik } from 'formik';

import { ContainerForm, FormStyle } from './styles';

import { Button } from '../../fragments/Button/styles';

const Form = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
    

    onSubmit: values => {
      console.log(values);
    },
  });


  return(
    <FormStyle onSubmit={formik.handleSubmit} id="contato">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Contato</h3>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <ContainerForm className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-3">
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
              <div className="col-lg-12">
                <div className="input-data">
                  <input 
                  type="text"
                  required
                  name="telefone"
                  id="telefone"
                  value={formik.values.telefone}
                  onChange={formik.handleChange}
                  />
                  <label>Mensagem</label>
                </div>
              </div>
            </ContainerForm>
          </div>
        </div>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-12 d-flex justify-content-end">
            <Button 
              type="submit"
              style={{paddingLeft: '102px', paddingRight: `102px`}}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </FormStyle>
  )
}

export default Form;
