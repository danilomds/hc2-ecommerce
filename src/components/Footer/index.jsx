import { useState } from 'react';
//import { Main, Logo, Email, MailWrap, Wrap, Text, Container, Container2, Container3, Container4, Wrap2 } from './styles';
import * as S from './styles';
import logo from '../../assets/logo.png'
import FeatherIcon from 'feather-icons-react';
import { FiFacebook, FiPhoneCall, FiAtSign, FiInstagram, FiTwitter, FiYoutube, FiLinkedin, FiMail, FiMessageSquare } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Footer() {
  const [email, setEmail] = useState('');

  function emailRequired() {
    toast.warning('Preencha o campo de email.', { position: toast.POSITION.TOP_RIGHT });

  }

  function SentWithSuccess() {
    toast.success('E-mail cadastrado com sucesso!', { position: toast.POSITION.TOP_RIGHT });

  }

  function InvalidFormat() {
    toast.error('Formato inválido!', { position: toast.POSITION.TOP_RIGHT });

  }


  function ValidateEmail(e) {
    let regEmail = /\S+@\S+\.\S+/;
    console.log(regEmail.test(e))
    if (!regEmail.test(e)) {
      return true;
    }
    return false;
  }


  function handleSubmit(key, values) {
    if (!values) {
      return emailRequired();
    }
    if (values) {
      if (ValidateEmail(values)) {
        InvalidFormat();
      } else {
        localStorage.setItem(key, values);
        SentWithSuccess();
        setEmail('');
      }
    }
  }


  return (
    <S.Footer>
      <S.Container>
        <S.Logo src={logo} alt="logo" />
        <S.Wrap>
          <FiFacebook className="social-m" />
          <FiInstagram className="social-m" />
          <FiTwitter className="social-m" />
          <FiYoutube className="social-m" />
          <FiLinkedin className="social-m" />
        </S.Wrap>
        <S.MailWrap>
          <FiMail className="mail" />
        </S.MailWrap>
        <S.Text>
          CADASTRE-SE EM NOSSA NEWSLETTER <br />
          para não perder nossas promoções!
        </S.Text>
        <S.Wrap2 />
        <S.Email
          type="email"
          placeholder="  Digite seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button onClick={() => handleSubmit('ls_email', email)}>
          <FeatherIcon icon="arrow-right" />

        </button>
        <ToastContainer />

      </S.Container>
      <S.Container2>
        
        <a href="/"><FiMessageSquare /> Entre em contato</a>
        
        <a href="/"><AiOutlineWhatsApp /> WhatsApp: (18)99166-4558</a>
        
        <a href="/"><FiPhoneCall /> Tel:(18)0000-0000</a>
        
        <a href="/"><FiAtSign /> danilomds2007@gmail.com</a>
      </S.Container2>

      <S.Container3>
        <a href="/">Sobre nós</a>
        <a href="/">Como comprar</a>
        <a href="/">Envio</a>
        <a href="/">Pagamento</a>
        <a href="/">Segurança</a>
        <a href="/">Trocas e devoluções</a>
        <a href="/">Depoimentos de Clientes</a>
      </S.Container3>

      <S.Container4>
        <p className="obj">Projeto desenvolvido para o desafio do Hiring Coders 2.</p>
        <p className="des">© 2021 ❤️ Danilo Mendes</p>
      </S.Container4>
    </S.Footer>
  )
}
