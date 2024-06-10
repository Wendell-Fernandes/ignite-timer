import styled from 'styled-components'

export const Form = styled.form`
  width: 41rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  overflow: hidden;
  margin-top: 4.6875rem;
`

const BaseButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  
  position: relative;
  border: none;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  padding: 1.25rem 0;
  border-radius: 0.5rem;
`

export const ButtonStart = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:hover span:last-child{
    visibility: visible;
  }

  &:disabled{ 
      cursor: not-allowed;
      opacity: 0.7;
  }
`

export const ButtonInterrupt = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-700']};

  &:hover{
    background-color: ${(props) => props.theme['red-500']};
  }
`
