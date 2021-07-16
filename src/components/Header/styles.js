import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap; 
  background: #2a95d7;
  height: 6rem;

  @media (max-width: 36rem) {    
      flex-direction: column;
      height: 9.5rem;
      justify-content: flex-start;   
    }
  
`;

export const Logo = styled.img`
  width: 11.5rem;
  height: 3.3rem;

  @media (max-width: 43.75rem) {    
    width: 9.5rem;
    height: 3rem;
    margin-top: 1rem;
    
    }
`;

export const Search = styled.input`
  margin-left: 5rem;
  margin-right: 5rem;
  width: 37rem;
  height: 3rem;
  border-radius: .5rem;
  border: none;
  font-size: 1rem;

  @media (max-width: 43.75rem) {    
  
    width: 16rem;
    height: rem;
    margin-top: 1rem;
    font-size: .8rem;
    margin-right: 5rem;
    
    }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;

  .user-icon {
    font-size: 2rem;
    color: #fabe11;
  }

  @media (max-width: 43.75rem) {    
      display: none;
    
    }
  
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  margin: .5rem;

  &&:hover {
    transition: all .2s;
    color: #fabe11;
  }
`;

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  font-size: 1.2rem;
  background: #f9d016;
  border-radius: 50%;

  @media (max-width: 43.75rem) {    
      display: none;
    
    }
`;





//#2a95d7

//#f9d016;

//#fabe11