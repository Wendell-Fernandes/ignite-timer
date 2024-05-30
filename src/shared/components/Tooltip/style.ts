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
// return (
//   <span className='invisible absolute left-1/2 top-0 -translate-x-1/2 bg-coal py-2 px-4 rounded-md font-bold text-sm text-gray6 whitespace-nowrap before:size-2 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:bg-coal before:rotate-45 group-hover:-translate-y-[110%] group-hover:visible group-enabled:invisible group-disabled:-translate-y-[130%] group-disabled:py-3'>
//     {text}
//   </span>
// )
