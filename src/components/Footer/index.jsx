import { useState } from 'react';
import { Main, Logo, Email, MailWrap, Wrap, Text, Container, Container2, Container3, Container4, Wrap2 } from './styles';
import logo from '../../assets/logo.png'
import FeatherIcon from 'feather-icons-react';
import { FiFacebook, FiPhoneCall, FiAtSign, FiInstagram, FiTwitter, FiYoutube, FiLinkedin, FiMail, FiMessageSquare } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai';


export function Footer() {
  const [email, setEmail] = useState('');

  function handleSubmit(key, values) {
    if (!values) {
      return alert('Preencha o campo de email.')
    }

    localStorage.setItem(key, values);
    alert('E-mail cadastrado com sucesso!');
    setEmail('')
  }

  return (
    <Main>
      <Container>
        <Logo src={logo} alt="logo" />
        <Wrap>
          <FiFacebook className="social-m" />
          <FiInstagram className="social-m" />
          <FiTwitter className="social-m" />
          <FiYoutube className="social-m" />
          <FiLinkedin className="social-m" />
        </Wrap>
        <MailWrap>
          <FiMail className="mail" />
        </MailWrap>
        <Text>
          CADASTRE-SE EM NOSSA NEWSLETTER <br />
          para não perder nossas promoções!
        </Text>
        <Wrap2 />
        <Email
          type="text"
          placeholder="  Digite seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={() => handleSubmit('ls_email', email)}>
          <FeatherIcon icon="arrow-right" />
        </button>

      </Container>
      <Container2>
        <FiMessageSquare />
        <a href="/">Entre em contato</a>
        <AiOutlineWhatsApp />
        <a href="/">WhatsApp: (18)99166-4558</a>
        <FiPhoneCall />
        <a href="/">Tel:(18)0000-0000</a>
        <FiAtSign />
        <a href="/">danilomds2007@gmail.com</a>
      </Container2>

      <Container3>
        <a href="/">Sobre nós</a>
        <a href="/">Como comprar</a>
        <a href="/">Envio</a>
        <a href="/">Pagamento</a>
        <a href="/">Segurança</a>
        <a href="/">Trocas e devoluções</a>
        <a href="/">Depoimentos de Clientes</a>
      </Container3>

      <Container4>
        <p className="obj">Site desenvolvido para o desafio do Hiring Coders 2 - 2021.</p>
        <p className="des">Desenvolvido com ❤️ por:  Danilo Mendes</p>
      </Container4>
    </Main>
  )
}