import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};
  white-space: nowrap;
`
