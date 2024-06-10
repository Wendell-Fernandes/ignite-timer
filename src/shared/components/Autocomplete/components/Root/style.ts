import styled, { css } from 'styled-components'

const BaseContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  &:focus-within div:last-child {
    visibility: visible;
  }
`
interface DisabledProp {
	disabled?: boolean
}

export const TaskContainer = styled(BaseContainer)<DisabledProp>`
  flex: 1;
  ${({ disabled }) => !disabled && css`&:hover{border-color: ${(props) => props.theme['green-500']};}`}
`

export const DurationContainer = styled(BaseContainer)<DisabledProp>`
  width: 4.5rem;
  ${({ disabled }) =>
		!disabled && css`&:hover{border-color: ${(props) => props.theme['green-500']}; button{cursor:default};}`}
`
