import styled from 'styled-components'

export const InputStyled = styled.input`
width: 17rem;

border: none;
background-color: transparent;
border-bottom: 2px solid ${(props) => props.theme['gray-500']};
text-align: center;
outline: none;
padding: 0.5rem 0;
font-size: 1.125rem;
font-weight: 700;


 &::placeholder{
  color:  ${(props) => props.theme['gray-500']};
 }
`
