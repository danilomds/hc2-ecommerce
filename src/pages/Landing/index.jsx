import { Main, Container, Products, Img } from './styles';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import Cel from '../../assets/iphone-12-blue.png'


export function Landing() {
  return (
    <>
      <Header />
      <Menu />
      <Main>

        <Container>
          <Products>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Products>

          <Products>

            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Products>

          <Products>

            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Products>

          <Products>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Products>

          <Products>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Products>

          <Products>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Products>
          

        </Container>
      </Main>
      <Footer />
    </>


  )
}