import styled from 'styled-components'

export const Button = styled.button`
background-color: transparent;
border: none;
font-size: 1.124rem;
font-weight: bold;
color: ${(props) => props.theme['gray-400']};
cursor: pointer;

& *{
  cursor: pointer;
}
`
