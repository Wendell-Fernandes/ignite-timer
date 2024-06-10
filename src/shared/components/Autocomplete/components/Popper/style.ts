import styled from 'styled-components'

export const Container = styled.div`
  width: 98%;
  max-height: 13rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 115%);


  overflow-y: auto;
  background-color: ${(props) => props.theme['gray-700']};
  scrollbar-width: thin;
  visibility: hidden;

  -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.30);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.30);
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.30);
`

export const PopperStyled = styled.button`
  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  border: none;
  text-align: left;
`
