import styled from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 1px solid #003D52;
  color: #003D52;
  margin: 1em;
  padding: 0.25em 0.25em;
  width: 100%;
  max-width: 345px;

  & > p {
      padding: 0.25em 1em;
      margin: 0;
  }

`

export { StyledButton }