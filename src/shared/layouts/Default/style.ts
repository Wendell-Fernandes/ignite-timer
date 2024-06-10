import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0 1rem;
  @media (max-width: 700px){
    padding: 0 0.25rem;
  }
  line-height: 1.625rem;
  overflow: hidden;
  background-color: ${(props) => props.theme['gray-900']};
`

export const Frame = styled.div`
  max-width: 70rem;
  width: 100%;
  max-height: 46.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-800']};
`
