import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.5rem 2.5rem 0 2.5rem;

  img {
  width: 2.5rem;
  height: 2.5rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;

    a {
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme['gray-100']};
    position: relative;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme['green-500']};
    }

    &:hover span:last-child{
      visibility: visible;
    }
  }
    & .active{
      color: ${(props) => props.theme['green-500']};
  }
`
