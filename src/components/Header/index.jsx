import { Main, Logo, Search, Wrap, User, Cart } from './styles';
import logo from '../../assets/logo.png';
import { BiUserCircle } from 'react-icons/bi';


export function Header() {
  return (
    <Main>
      <Logo src={logo} alt="logo" />
      <Search type="text" placeholder="  Busque aqui o seu produto" />
      <Wrap>
        <BiUserCircle className="user-icon"/>
        <User>Entrar / Cadastrar</User>
        <Cart>0</Cart>
      </Wrap>
      
      
    </Main>
  )
}