import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.small};
    max-width: ${theme.grid.container};
    margin: 0 auto;
    width: 100%:
  `}
`
