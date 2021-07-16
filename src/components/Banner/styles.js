import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20rem;
  flex-wrap: wrap; 

  @media (max-width: 36rem) {    
    margin-top: 2rem;
    width: 100%; 
    justify-content: flex-start;
    height: 10rem;
  }
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
  border-radius: 1rem;
  margin-top: -2rem;

  @media (max-width: 36rem) {    
    border-radius: 0;
    width: 100%;
    height: 15rem;
    }
`;

export const Img = styled.img`

  height: 20rem;  
  border-radius: 1rem;
  background: no-repeat center;
 
  @media (max-width: 36rem) {    
    margin-top: -2.5rem;
    margin-left: .2rem;
    width: 8rem;
    height: 11rem;
   
       
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

  @media (max-width: 36rem) {    
    margin-top: -1rem;
   margin-right: 5rem;
    
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

  @media (max-width: 36rem) {    
    font-size: .7rem
    
    }

  
`;

export const Email = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: .2rem;
  border: none;
  font-size: 1rem;

  @media (max-width: 36rem) {    
    width: 15rem;
    
    }
`;

