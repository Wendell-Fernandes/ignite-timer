import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  & *{
    font-family: 'Roboto mono', sans-serif;
    font-size: 10rem;
    font-weight: bold;
  }
`

export const Separator = styled.div`
  display: flex;
  gap: 1rem;
`

export const Zero = styled.p`
  height: 12.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 8px;
  padding: 0 1rem;
`

export const Dots = styled.span`
  color: ${(props) => props.theme['green-500']};
  margin: 0 0.25rem;
`
