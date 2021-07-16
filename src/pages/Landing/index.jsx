import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Products } from '../../components/Products';
import { Banner } from '../../components/Banner';


export function Landing() {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <Products />
      <Footer />    
    </>
  )
}
