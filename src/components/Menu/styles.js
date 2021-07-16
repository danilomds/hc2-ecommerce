import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
  background: #fabe11;
  flex-wrap: wrap;
  
  a { 
    font-size: 1.3rem;
    text-decoration: none;
    color: gray;
    margin: 3.8rem;
    transition: 0.2s;
  }

  a:hover {
    color: #111111;
  }

  @media (max-width: 43.75rem) {    
      display: none;
    
    }
  
`;