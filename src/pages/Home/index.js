import Navbar from '../../components/Navbar';

import { BannerContainer } from './styles';
import About from '../../components/About';

export default function Home(){
  return(
    <>
      <Navbar />
      <BannerContainer />
      <About />
    </>
  )
};