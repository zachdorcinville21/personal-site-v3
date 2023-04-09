import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean; }>`
  display: flex;
  flex-direction: column;
  background: #36454f;
  width: 50%;
  height: 100vh;
  text-align: center;
  padding: 60px 10px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-weight: normal;
    font-size: 20px;
    padding: 2rem 0;
    color: #fffafa;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #DCDCDC;
    }
  }
`;