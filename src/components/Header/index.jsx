import { Main, Logo, Search, RighttWrap, User, Cart } from './styles';
import logo from '../../assets/logo.png'


export function Header() {
  return (
    <Main>
      <Logo src={logo} alt="logo" />
      <Search type="text" placeholder="  O que você procura" />
      <RighttWrap>
        <User>Entrar / Cadastrar</User>
        <Cart>0</Cart>
      </RighttWrap>
      
      
    </Main>
  )
}