import styled from 'styled-components'

export const Container = styled.div`
position: relative;

&:focus-within div:last-child {
  visibility: visible;
}
`
