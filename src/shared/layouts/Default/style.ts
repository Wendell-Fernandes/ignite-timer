import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  line-height: 1.625rem;
  overflow: hidden;
  background-color: ${(props) => props.theme['gray-900']};

  & .frame{
    width: 70rem;
    height: 46.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    background-color: ${(props) => props.theme['gray-800']};
  }
`
