import Navbar from '../../components/Navbar';

import { BannerContainer } from './styles';
import About from '../../components/About';
import Associated from '../../components/Associated';
import Plans from '../../components/Plans';
import Form from '../../components/Form';
import Bonus from '../../components/bonus';
import Maps from '../../components/Maps';
import Contact from '../../components/contact';

export default function Home(){
  return(
    <>
      <Navbar />
      <BannerContainer />
      <About />
      <Associated />
      <Plans />
      <Form />
      <Bonus />
      <Maps />
      <Contact />
    </>
  )
};
