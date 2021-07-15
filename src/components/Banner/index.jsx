import { useState } from 'react';
import { Main, Container, Img, Content, MailWrap, Text, Wrap2, Email } from './styles';
import FeatherIcon from 'feather-icons-react';
import { FiMail } from 'react-icons/fi';
import Bfriday from '../../assets/bfriday.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Banner() {
  const [email, setEmail] = useState('');

  function emailRequired() {
    toast.warning('Preencha o campo de email.', { position: toast.POSITION.TOP_RIGHT });

  }

  function SentWithSuccess() {
    toast.success('E-mail cadastrado com sucesso!', { position: toast.POSITION.TOP_RIGHT });

  }

  function handleSubmit(key, values) {
    if (!values) {
      return emailRequired()
    }
    localStorage.setItem(key, values);
    SentWithSuccess();
    setEmail('')
  }

  return (
    <Main>
      <Container>
        <Img src={Bfriday} alt="black-friday" />
        <Content>
          <MailWrap>
            <FiMail className="mail" />
          </MailWrap>
          <Text>
            CADASTRE-SE EM NOSSA NEWSLETTER <br />
            para não perder nossas promoções!
          </Text>
          <Wrap2 />
          <Email
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
        </Content>
      </Container>
    </Main>

  )


}