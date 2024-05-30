import styled from 'styled-components'

export const Container = styled.main`
  width: 41rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  margin-top: 4.6875rem;

  & .title{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
    white-space: nowrap;

    & .time{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      border-bottom: 2px solid ${(props) => props.theme['gray-500']};
      color: ${(props) => props.theme['gray-500']};
      padding: 0.5rem 0;

      & button{
        background-color: transparent;
        border: none;
      }
    }
  }

  & .timer{
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto Mono', sans-serif;
    font-size: 10rem;
    font-weight: 700;
    line-height: 1.25rem;

    & div{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      

      & div{
        height: 12.5rem;
        
        background-color: ${(props) => props.theme['gray-700']};
        border-radius: 0.5rem;
        padding: 0 1rem;
        font-size: 10rem;
      }
    }
    
    & span {
        color: ${(props) => props.theme['green-300']};
        margin: 0 0.25rem;
    }
  }

  & .button{
    width: 100%;

    & button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      position: relative;

      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5rem;

      border: none;
      color: ${(props) => props.theme['green-100']};
      background-color: ${(props) => props.theme['green-500']};
      cursor: pointer;
      padding: 1.25rem 0;
      border-radius: 0.5rem;

      &:hover span:last-child{
      visibility: visible;
      }

      &:disabled{ 
        cursor: not-allowed;
        color: ${(props) => props.theme['green-300']};

        & *{
          color: ${(props) => props.theme['green-300']};
        }
      }
    }

    & .start{
      background-color: ${(props) => props.theme['green-500']};

      &:disabled{ 
        background-color: ${(props) => props.theme['green-700']};
      }
    }

    & .stop{
      background-color: ${(props) => props.theme['red-500']};
    }
  }
`
