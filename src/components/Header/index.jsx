import * as S  from './styles';
import logo from '../../assets/logo.png';
import { BiUserCircle } from 'react-icons/bi';

export function Header() {
 
  return (
    <S.Header>
      <S.Logo src={logo} alt="logo" />
      <S.Search type="text" placeholder="  Busque aqui o seu produto" />
      <S.Wrap>
        <BiUserCircle className="user-icon"/>
        <S.User>Entrar / Cadastrar</S.User>        
      </S.Wrap>  
      <S.Cart>0</S.Cart>   
    </S.Header>
  )
}
