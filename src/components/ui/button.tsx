import React, {ReactNode} from 'react';
import styled from "styled-components";

type OwnProps = {
    onClick: () => void;
    children: ReactNode;
    type?: string;
    disabled?: boolean;
}

const Button = (props: OwnProps) => {

    let content;

    switch (props.type) {
        case 'create':
            content = <CreateButton onClick={props.onClick}>
                {props.children}
            </CreateButton>
            break;
        case 'create-modal':
            content = <ModalCreateButton disabled={props.disabled} onClick={props.onClick}>
                {props.children}
            </ModalCreateButton>
            break;
        case 'edit':
            content = <EditButton onClick={props.onClick}>
                {props.children}
            </EditButton>
            break;
        case 'edit-modal':
            content = <ModalEditButton disabled={props.disabled} onClick={props.onClick}>
                {props.children}
            </ModalEditButton>
            break;
        case 'delete':
            content = <DeleteButton onClick={props.onClick}>
                {props.children}
            </DeleteButton>
            break;
        case 'reset':
            content = <ResetButton onClick={props.onClick}>
                {props.children}
            </ResetButton>
            break;
        default:
            content = null;
    }
    return content;
};

const ButtonComponent = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  border: none;
  cursor: ${props => props.disabled ? "default" : "pointer"};
  visibility: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

const CreateButton = styled(ButtonComponent)`
  background-color: #20B2AA;
`;

const ModalCreateButton = styled(CreateButton)`
  visibility: visible;
  margin-top: 20px;
`;

const EditButton = styled(ButtonComponent)`
  background-color: #FFFF00;
`;

const ModalEditButton = styled(EditButton)`
  visibility: visible;
  margin-top: 20px;
`;

const DeleteButton = styled(ButtonComponent)`
  background-color: #DC143C;
`;

const ResetButton = styled(ButtonComponent)`
  visibility: visible;
  background-color: #d2b6b6;
`;

export default Button;