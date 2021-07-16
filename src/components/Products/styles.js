import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap; 
 


  @media (max-width: 36rem) {    
      flex-direction: column;
      margin-top: 3rem;
    }

`;

export const Card = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;   
  width: 30rem;
  height: 30rem;
  box-shadow: 0 0 .5rem gray;    
  border-radius: .5rem;

  @media (max-width: 36rem) {    
    width: 20rem;
    height: 28rem;
    }

`;


export const Img = styled.img`
  width: 16rem;

  @media (max-width: 36rem) {    
    width: 16rem;
    margin-top: -1rem;
    }
`;

export const Title = styled.h2`
  margin: .4rem .2rem;
  font-size: 1.3rem;

  @media (max-width: 36rem) {    
    font-size: 1rem;
    }
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 2rem;

  @media (max-width: 36rem) {    
    font-size: 1.8rem;
    }
`;

export const Button = styled.button`
  margin: .5rem 0;
  width: 15rem;
  height: 3rem;
  padding: 0.4rem;
  background: #2a95d7;
  border: none;
  border-radius: .5rem;
  color: #fff;
  cursor: pointer;
  transition: filter 0.2s;

  &&:hover {
        filter: brightness(0.9);
    }

    @media (max-width: 36rem) {    
      width: 15rem;
      font-size: 1rem;
      
    }
  

  
`;





