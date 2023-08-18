import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import {ContainerModal, Text} from "../ui/constants";
import Input from "../ui/input";
import Button from "../ui/button";
import {TreeNode} from "../../App";
import Modal from '../ui/modal';

type OwnProps = {
    node: TreeNode;
    setShowModal: (flag: boolean) => void;
    createNode: (id: number, name: string) => void;
}

const CreateModal = (props: OwnProps) => {

    const {node, setShowModal, createNode} = props

    const [isBrowserLoaded, setIsBrowserLoaded] = useState<boolean>(false)

    useEffect(() => {
        setIsBrowserLoaded(true);
    }, []);

    const [inputValue, setInputValue] = useState<string>('')

    const onClickCreate = useCallback(() => {
        createNode(node.id, inputValue)
        setInputValue('')
        setShowModal(false)
    }, [createNode, setInputValue, setShowModal, inputValue])

    const content = useMemo(() => ( <Modal setShowModal={setShowModal}>
        <ContainerModal onClick={e => e.stopPropagation()}>
            <Text style={{marginBottom: 30}}>
                Create node
            </Text>
            <div>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <Button disabled={inputValue === ''} onClick={onClickCreate} type={'create-modal'}>
                Create
            </Button>
        </ContainerModal>
    </Modal>), [setShowModal, inputValue, setInputValue, onClickCreate])

    return isBrowserLoaded ? createPortal(content,  document.getElementById('modal-root') as Element) : null
};

export default CreateModal;