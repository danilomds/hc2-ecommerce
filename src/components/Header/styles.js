import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2a95d7;
  width: 100%;
  height: 6rem;
  flex-wrap: wrap;


  
`;

export const Logo = styled.img`
  width: 11.5rem;
  height: 3.3rem;
`;

export const Search = styled.input`
  margin-left: 5rem;
  margin-right: 5rem;
  width: 37rem;
  height: 3rem;
  border-radius: .5rem;
  border: none;
  font-size: 1rem;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;

  .user-icon {
    font-size: 2rem;
    color: #fabe11;
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
`;





//#2a95d7

//#f9d016;

//#fabe11