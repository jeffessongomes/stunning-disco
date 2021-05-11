import Navbar from '../../components/Navbar';

import { BannerContainer, App } from './styles';
import About from '../../components/About';
import Associated from '../../components/Associated';
import Plans from '../../components/Plans';
import Form from '../../components/Form';
import Bonus from '../../components/bonus';
import Maps from '../../components/Maps';
import Contact from '../../components/contact';
import Zap from '../../assets/img/zapzap.png';

export default function Home(){
  return(
    <App>
      <a href="#000" className="zap">
        <img src={Zap} alt="Imagem do Whatsapp" />
      </a>
      <Navbar />
      <BannerContainer />
      <About />
      <Associated />
      <Plans />
      <Form />
      <Bonus />
      <Maps />
      <Contact />
    </App>
  )
};
