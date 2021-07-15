import { Main, Container, Prod, Img } from './styles';
import iPhone12B from '../../assets/iphone-12-blue.png';
import iPhone12R from '../../assets/iphone11-red.png';
import iPhone12P from '../../assets/iphone-12-purple.png';
import iPhone12W from '../../assets/iphone-12-white.png';


import Cel from '../../assets/iphone-12-blue.png';

export function Products() {
  return (
    <Main>
    <Container>
          <Prod>
            <Img src={iPhone12B} alt="celular" />
            <p className="description">iPhone 12 Azul 128GB </p>
            <span>R$ 1.199,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

          <Prod>
            <Img src={iPhone12R} alt="celular" />
            <p className="description">iPhone 12 Verm. 128GB </p>
            <span>R$ 1.199,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

          <Prod>
            <Img src={iPhone12P} alt="celular" />
            <p className="description">iPhone 12 Roxo 256GB </p>
            <span>R$ 1.499,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

          <Prod>
            <Img src={iPhone12B} alt="celular" />
            <p className="description">iPhone 12 Azul 256GB </p>
            <span>R$ 1.499,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod>

                
          

      
        </Container>

        <Container>
        <Prod>
            <Img src={iPhone12W} alt="celular" />
            <p className="description">iPhone 12 Branco 128GB </p>
            <span>R$ 1.199,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod> 

          <Prod>
            <Img src={iPhone12W} alt="celular" />
            <p className="description">iPhone 12 Branco 256GB </p>
            <span>R$ 1.499,00</span>
            <button>Adicionar ao carrinho</button>
          </Prod> 

          <Prod>
            <Img src={iPhone12R} alt="celular" />
            <p className="description">iPhone 12 Verm. 256GB </p>
            <span>R$ 1.499,00</span>
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