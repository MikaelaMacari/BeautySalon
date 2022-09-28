import styled from "styled-components";

export const StyledForm = styled.form<{ error?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  gap: ${(props) => (props.error ? "50px" : "70px")};
`;
