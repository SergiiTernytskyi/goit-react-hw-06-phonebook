import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;
