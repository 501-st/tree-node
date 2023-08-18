import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import {ContainerModal, Text} from "../ui/constants";
import Input from "../ui/input";
import Button from "../ui/button";
import Modal from '../ui/modal';
import {TreeNode} from "../../App";

type OwnProps = {
    node: TreeNode;
    setShowModal: (flag: boolean) => void;
    editNode: (id: number, name: string) => void;
}

const EditModal = (props: OwnProps) => {

    const {setShowModal, node, editNode} = props

    const [isBrowserLoaded, setIsBrowserLoaded] = useState<boolean>(false)

    useEffect(() => {
        setIsBrowserLoaded(true);
    }, []);

    const [inputValue, setInputValue] = useState(node.name)

    const onEditClick = useCallback(() => {
        editNode(node.id, inputValue)
        setInputValue('')
        setShowModal(false)
    }, [editNode, setInputValue, setShowModal, inputValue])

    const content = useMemo(() => (<Modal setShowModal={setShowModal}>
        <ContainerModal onClick={e => e.stopPropagation()}>
            <Text style={{marginBottom: 30}}>
                Edit node
            </Text>
            <div>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <Button disabled={inputValue === "" || inputValue === node.name}
                    onClick={onEditClick} type={"edit-modal"}>
                Edit
            </Button>
        </ContainerModal>
    </Modal>), [inputValue, node.name, setShowModal, setInputValue, onEditClick])

    return isBrowserLoaded ? createPortal(content, document.getElementById('modal-root') as HTMLElement) : null
};

export default EditModal;