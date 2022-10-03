import styled from "styled-components";

export const Container = styled.div<{ gap: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? "4.5rem" : "")};
`;
