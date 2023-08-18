import React, {useCallback, useState} from 'react';
import Button from "./ui/button";
import {ModRowContainer, RowContainer, Text} from "./ui/constants";
import CreateModal from "./modals/createModal";
import EditModal from "./modals/editModal";
import {TreeNode} from "../App";

type OwnProps = {
    nodes: TreeNode[];
    removeNode: (id: number) => void;
    createNode: (id: number, name: string) => void;
    editNode: (id: number, name: string) => void;
}

const List = (props: OwnProps) => {

    const {nodes, removeNode, createNode, editNode} = props

    const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
    const [showEditModal, setShowEditModal] = useState<boolean>(false)
    const [activeNode, setActiveNode] = useState<TreeNode | null>(null)

    const onClickCreate = useCallback((node: TreeNode) => {
        setActiveNode(node)
        setShowCreateModal(true)
    }, [setActiveNode, setShowCreateModal])

    const onClickEdit = useCallback((node: TreeNode) => {
        setActiveNode(node)
        setShowEditModal(true)
    }, [setActiveNode, setShowEditModal])

    return (
        <ul>
            {nodes.map((node) => (
                <li key={node.id}>
                    <ModRowContainer className={'local'}>
                        <Text>
                            {node.name}
                        </Text>
                        <RowContainer style={{columnGap: 20}}>
                            <Button onClick={() => onClickCreate(node)} type={"create"}>
                                Create
                            </Button>
                            <Button onClick={() => onClickEdit(node)} type={"edit"}>
                                Edit
                            </Button>
                            <Button onClick={() => removeNode(node.id)} type={"delete"}>
                                Delete
                            </Button>
                        </RowContainer>
                    </ModRowContainer>
                    {!!node.children.length && <List nodes={node.children} removeNode={removeNode} createNode={createNode}
                                            editNode={editNode}/>}
                </li>
            ))}
            {showCreateModal && activeNode &&
                <CreateModal setShowModal={setShowCreateModal} createNode={createNode}
                             node={activeNode}/>}
            {showEditModal && activeNode &&
                <EditModal setShowModal={setShowEditModal} editNode={editNode}
                           node={activeNode}/>}
        </ul>
    );
};

export default List;