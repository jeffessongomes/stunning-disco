import Navbar from '../../components/Navbar';

import { BannerContainer } from './styles';
import About from '../../components/About';
import Associated from '../../components/Associated';
import Plans from '../../components/Plans';
import Form from '../../components/Form';

export default function Home(){
  return(
    <>
      <Navbar />
      <BannerContainer />
      <About />
      <Associated />
      <Plans />
      <Form />
    </>
  )
};
