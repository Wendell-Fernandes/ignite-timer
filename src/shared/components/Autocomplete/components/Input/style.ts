import styled from 'styled-components'

export const BaseInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: transparent;
  box-shadow: 0 0 0 0;
  border: none;
  outline: none;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;

  &::placeholder{
    color: ${(props) => props.theme['gray-500']};
    text-align: center;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=text] {
    padding: 0 0.5rem;
  }
  
  &[type=number] {
   cursor: default;
   text-align: center;
    -moz-appearance: textfield;
  }
`
