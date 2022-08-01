import styled from 'styled-components'

export const Container = styled.div`
padding: 0px;
`;

export const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px; 
display: flex;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;
align-items: center;

& > a {
  width: 135px;
  height: 34px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
  } `;