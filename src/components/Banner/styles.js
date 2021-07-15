import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20rem;
  flex-wrap: wrap; 
  margin: .2rem;
  
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.3rem;
    height: 2.5rem;
    background: #fabe11;
    border: none;
    margin-left: -3.6rem;
    border-radius: .2rem;
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  width: 80%;
  height: 20rem;
  background: #060606;
  box-shadow: 0 0 .5rem gray;  
  border-radius: 1rem;
  margin-top: -3rem;
  
`;

export const Img = styled.img`
  flex-basis: 35%;
  height: 20rem;
  flex-wrap: wrap;
 
`;

export const MailWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: #fabe11;
  border-radius: 50%;
  margin-left: 2rem;

  .mail {
    font-size: 2rem;
    color: #111111;
    margin: .2rem;
  }
`;

export const Wrap2 = styled.div`
  width: 1rem;
`;

export const Text = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  margin: 1rem;

  
`;

export const Email = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: .2rem;
  border: none;
  font-size: 1rem;
`;

