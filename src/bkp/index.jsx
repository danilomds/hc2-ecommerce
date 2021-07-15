import { Main, Container, Prod, Img } from './styles';
import Cel from '../../assets/iphone-12-blue.png';

export function Products() {
  return (
    <Main>
    <Container>
          <Prod>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

          <Prod>

            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

          <Prod>

            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

          <Prod>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod> 

          <Prod>
            <Img src={Cel} alt="celular" />
            <p className="description">iPhone 12 Blue 128GB </p>
            <span>R$ 1.200,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>        
          

      
        </Container>
        </Main>
  )
}