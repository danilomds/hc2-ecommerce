import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 32rem;
  max-width: 1100px;

`;

export const Prod = styled.div`  
    display: flex; 
    flex-direction: column;
    flex-basis: 30%;
    height: 30rem;
    box-shadow: 0 0 .5rem gray;    
    border-radius: .5rem;
    margin-left: 1rem;


  .description {
    font-size: 1.2rem;
    text-align: left; 
    margin: 1rem;
  }

  span {
    font-weight: bold;
    margin: 1rem;
  }

  button {
    margin: 1rem;
    flex-basis: 80%;
    height: 1rem;
    background: #2a95d7;
    border: none;
    border-radius: .5rem;
    color: #fff;
    font-size: 1rem;
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
