import styled from 'styled-components'

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 2.5rem 0 2.5rem;

  & .img{
    flex-grow: 1;

    & img {
    width: 2.5rem;
    height: 2.5rem;
    }
  }

  & a {
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    color: ${(props) => props.theme['green-300']};

    &:hover span:last-child{
      visibility: visible;
    }
  }

`
