import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  padding: 15px 20px;
`;

export const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

export const ContainerModal = styled.div`
  width: 400px;
  height: 150px;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
`;