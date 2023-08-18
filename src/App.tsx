import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Button from "./components/ui/button";
import List from "./components/List";
import {deleteNode} from "./components/helpers/deleteNode";
import {createNode} from "./components/helpers/createNode";
import {editNode} from "./components/helpers/editNode";

export type TreeNode = {
  id: number;
  name: string
  children: TreeNode[]
}

const initialState: TreeNode[] = [
  {
    id: 1,
    name: "node1",
    children: [],
  },
  {
    id: 2,
    name: "node2",
    children: [
      {
        id: 5,
        name: "node5",
        children: [],
      }
    ]
  },
  {
    id: 3,
    name: "node3",
    children: [
      {
        id: 6,
        name: "node6",
        children: [
          {
            id: 7,
            name: "node7",
            children: [],
          },
          {
            id: 8,
            name: "node8",
            children: [],
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "node4",
    children: [],
  }
]

const App = () => {
  const [nodes, setNodes] = useState<TreeNode[]>(() => JSON.parse(JSON.stringify(initialState)))

  const onClickDelete = useCallback((id: number) => {
    setNodes(deleteNode([...nodes], id))
  }, [nodes, setNodes])

  const onClickCreate = useCallback((id: number, name: string) => {
    setNodes(createNode([...nodes], id, name))
  }, [nodes, setNodes])

  const onClickEdit = useCallback((id: number, name: string) => {
    setNodes(editNode([...nodes], id, name))
  }, [nodes, setNodes])

  const onResetClick = useCallback(() => {
    setNodes(JSON.parse(JSON.stringify(initialState)))
  }, [setNodes, initialState])

  return (
      <Wrapper>
        <Container>
          <ButtonContainer>
            <Button type={'reset'} onClick={onResetClick}>
              Reset
            </Button>
          </ButtonContainer>
          <List nodes={nodes} removeNode={onClickDelete} createNode={onClickCreate}
                editNode={onClickEdit}/>
        </Container>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 150px;
  width: 1200px;
  background-color: #8a96da;
  border-radius: 20px;
  padding: 20px 20px 20px 0;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export default App;