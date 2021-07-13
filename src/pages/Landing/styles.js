import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column; 

 
`;

export const Container = styled.div`
  display: flex;
  //background: #2aaa17;
  flex-basis: 100%;
  max-width: 1200px;
  

  
`;

export const Products = styled.div`  
    display: flex; 
    flex-direction: column;
    flex-basis: 30%;
    height: 30rem;
    box-shadow: 0 0 .5rem gray;
    margin: .5rem;
    border-radius: .5rem;


  .description {
    font-size: 1.2rem;
    text-align: left;  
  }

  span {
    font-weight: bold;
  }

  button {
    margin: 1rem;
    width: 15rem;
    height: 3rem;
    background: #2a95d7;
    border: none;
    border-radius: .5rem;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: filter 0.2s;   

  } 

  button:hover {
        filter: brightness(0.9);
    }
`;

export const Img = styled.img`
  width: 100%;
  height: 20rem;
  margin-top: -1rem;

`; 
