import React, {ChangeEvent } from 'react';
import styled from "styled-components";

type OwnProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: OwnProps) => {
    return (
        <InputContainer {...props}/>
    );
};

const InputContainer = styled.input`
  padding: 10px;
  width: 300px;
`;

export default Input;