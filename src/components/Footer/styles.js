import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;  
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 36rem) {    
    width: 100%;
    
    }
`;

export const Email = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: .2rem;
  border: none;
  font-size: 1rem;

  @media (max-width: 36rem) {    
    width: 20rem ;
    font-size: 1rem;
    margin-left: -.3rem;
  }

`;

export const Wrap = styled.div`
  display: flex;
  width: 9rem;
  margin-left: 2rem;

.social-m {
  font-size: 2rem;
  color: #fabe11;
  margin: .2rem;
}

@media (max-width: 36rem) {    
    display: none;   
  }
`;

export const Wrap2 = styled.div`
  width: 1rem;
  
  @media (max-width: 36rem) {    
    display: none;   
  }
`;
export const Text = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  margin: 1rem;

  @media (max-width: 36rem) {    
    font-size: 1rem;   
    margin: .5rem ;
  }

  
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 11.3rem;
  background: #2a95d7;

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

  @media (max-width: 36rem) {    
    flex-direction: column;  
    
    button {
      margin-top: -2.8rem;
      margin-left: 16rem;
    }

    ToastContainer {
      margin-top: 2rem;
    }
  }

  
`;

export const Logo = styled.img`
  width: 11.5rem;
  height: 3.3rem;

  @media (max-width: 43.75rem) {    
    display: none;
    
  }
`;


export const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9.8rem;
  background: #fabe11;

  a { 
    color: #494c4e;
    text-decoration: none;
    margin: 5rem;    
  }

  a:hover {
      color: #111111;
      transition: all 0.2s;
    }

    @media (max-width: 36rem) {  
      flex-direction: column;  
    a {
      margin: .5rem
    }   
  }

`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 9.5rem;
  background: #2a95d7;

  a { 
    color: #fff;
    text-decoration: none;
    margin: 2.3rem;
    font-weight: bold;
  }

  a:hover {
    color: #fabe11;
  }

  @media (max-width: 36rem) {  
    height: 2rem;
      a {
        display: none;
      }
  }

  

`;


export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 7rem;
  background: #2a95d7;
  margin-top: .1rem;

  .obj {
    font-size: .8rem;
    color: #fff;
    margin-top: 3.5rem;
  }

  .des {
    font-size: .8rem;
    color: #fff;
    margin-top: -.3rem;
  }

  @media (max-width: 36rem) { 
    height: 5rem; 
    .obj {
      margin-top: 1.5rem;
    }

  }
  

`;





























//#2a95d7

//#f9d016;

//#fabe11