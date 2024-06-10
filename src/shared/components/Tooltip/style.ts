import styled from 'styled-components'

export const TooltipStyled = styled.span`
  visibility: hidden;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -125%);

  background-color: ${(props) => props.theme['gray-900']};
  padding: 0.5rem 1rem; 
  border-radius: 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-100']}; 
  white-space: nowrap;

  &:before{
    content: '';

    width: 0.5rem;
    height: 0.5rem;

    position: absolute;
    left: 50%;
    bottom: -0.25rem;
    transform: translateX(-50%) rotate(45deg);

    background-color: ${(props) => props.theme['gray-900']};
  }
`
