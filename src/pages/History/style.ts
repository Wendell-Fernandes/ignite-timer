import styled from 'styled-components'

export const Container = styled.main`
  width: 58.1875rem;

  font-family: 'Roboto', sans-serif;

  & h1{
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;

    padding-top: 3.125rem;
  }

  & .table {
    width: 100%;
    padding-top: 2rem;
    font-size: 0.875rem;

    & .header{
      height: 3.375rem;
      display: flex;
      align-items: center;
      gap: 3.5rem;
      
      font-weight: 700;
      background-color: #323238;
      border-radius: 0.5rem 0.5rem 0 0;
      padding: 0 1.5rem;

      & .task {
          flex: 50%;
      }
      & .duration {
        flex: 15%;
      }
      & .start {
        flex: 20%;
      }
      & .status {
        flex: 15%;
      }
    }

    & .rows{
      height: 25.4375rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      overflow-y: auto;
      padding-top: 0.25rem;
      scrollbar-color: #505059 transparent;
      scrollbar-width: thin;

      & div {
        display: flex;
        align-items: center;
        gap: 3.5rem;

        background-color: #29292E;
        padding: 1rem 1.5rem;

        & .task {
          flex: 50%;
        }
        & .duration {
          flex: 15%;
        }
        & .start {
          flex: 20%;
        }
        & .status {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 15%;
        }
      }
    }

    & .empty_table{
      height: 25.4375rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      border-radius: 0 0 0.5rem 0.5rem;
      background-color: #29292E;
    }
  }
`
