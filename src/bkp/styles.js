import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column; 
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background: #2aaa17;
  width: 100%;

  

  
`;

export const Prod = styled.div`  
    display: flex; 
    flex-direction: column;
    flex-basis: 20%;
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
    flex-basis: 80%;
    height: 2rem;
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
