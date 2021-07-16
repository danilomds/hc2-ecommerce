import * as S from './styles';
import iPhone12B from '../../assets/iphone-12-blue.png';
import iPhone12R from '../../assets/iphone11-red.png';
import iPhone12P from '../../assets/iphone-12-purple.png';
import iPhone12W from '../../assets/iphone-12-white.png';


export function Products() {
  return (
    <S.Container>
      <S.Card>
        <S.Img src={iPhone12B} alt="celular" />
        <S.Title>iPhone 12 Azul 128GB</S.Title>
        <S.Price>R$ 1.199,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12R} alt="celular" />
        <S.Title>iPhone 12 Verm. 128GB</S.Title>
        <S.Price>R$ 1.199,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12P} alt="celular" />
        <S.Title>iPhone 12 Roxo 256GB</S.Title>
        <S.Price>R$ 1.499,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12W} alt="celular" />
        <S.Title>iPhone 12 Branco 128GB</S.Title>
        <S.Price>R$ 1.199,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12W} alt="celular" />
        <S.Title>iPhone 12 Branco 256GB</S.Title>
        <S.Price>R$ 1.499,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12P} alt="celular" />
        <S.Title>iPhone 12 Roxo 256GB</S.Title>
        <S.Price>R$ 1.499,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12B} alt="celular" />
        <S.Title>iPhone 12 Azul 256GB</S.Title>
        <S.Price>R$ 1.499,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

      <S.Card>
        <S.Img src={iPhone12R} alt="celular" />
        <S.Title>iPhone 12 Verm. 256GB</S.Title>
        <S.Price>R$ 1.499,00</S.Price>
        <S.Button>Adicionar ao carrinho</S.Button>
      </S.Card>

    </S.Container>

  )
}