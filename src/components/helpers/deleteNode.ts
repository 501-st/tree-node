import {TreeNode} from "../../App";

export const deleteNode = (nodes: TreeNode[], id: number) => {
    for (let i = 0; i < nodes.length; i++) {
        // обрабатывает случай когда obj с удаляемым id находится на верхнем уровне
        if (nodes[i].id === id) {
            nodes.splice(i, 1);
            return nodes;
        }
        // обрабатывает случай когда obj не имеет удаляемого id, но имеет потомков, у которых он может быть
        if (nodes[i].children.length) {
            deleteNode(nodes[i].children, id);
        }
    }
    return nodes;
};