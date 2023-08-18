import React, {ReactChildren, ReactNode} from 'react';
import styled from "styled-components";

type OwnProps = {
    children: ReactNode;
    setShowModal: (flag: boolean) => void;
}

const Modal = (props: OwnProps) => {
    return (
        <Container onClick={() => props.setShowModal(false)}>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
`;

export default Modal;