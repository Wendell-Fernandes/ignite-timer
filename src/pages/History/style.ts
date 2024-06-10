import styled from 'styled-components'

export const Container = styled.main`
  max-width: 60.25rem;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  padding: 1rem; 

  & h1{
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;

    padding-top: 3.125rem;
  }
`

export const Table = styled.div`
  overflow: auto;
  padding-top: 2rem;

  font-size: 0.875rem;
`

export const Header = styled.div`
  width: 58.25rem;
  display: flex;
  padding: 1rem 1.5rem;
  
  font-weight: 700;
  background-color: #323238;
  border-radius: 0.5rem 0.5rem 0 0;

  & .task {
      width: 50%;
  }

  & .duration {
      width: 15%;
  }

  & .start {
      width: 20%;
  }

  & .status {
      width: 15%;
  }
`

export const FullTable = styled.div`
  width:  58.25rem;
  height: 25.4375rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.25rem;

  overflow-y: auto;
  scrollbar-width: thin;
`

export const Details = styled.div`
  display: flex;
  padding: 1rem 1.5rem;

  background-color: #29292E;
`

export const Task = styled.span`
width: 50%;
`

export const Duration = styled.span`
width: 15%;
white-space: nowrap;
overflow: hidden;
`

export const Start = styled.span`
width: 20%;
`

const StatusColors = {
	yellow: 'yellow-500',
	red: 'red-500',
	green: 'green-500'
}

interface StatusColorsProp {
	color: keyof typeof StatusColors
}

export const Status = styled.span<StatusColorsProp>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 15%;

  &::before{
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme[StatusColors[props.color]]};
  }
`

export const EmptyTable = styled.div`
  height: 25.4375rem;
  border-radius: 0 0 0.5rem 0.5rem;
  background-color: #29292E;
`
