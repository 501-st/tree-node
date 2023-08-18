import { TreeNode } from "../../App";

export const createNode = (nodes: TreeNode[], id: number, name: string) => {
    for (const node of nodes){
        // обрабатывает случай когда obj с родительским id находится на первом уровне
        if (node.id === id) {
            node.children.push({id: Date.now(), name: name, children: []})
            return nodes;
        }
        // обрабатывает случай когда obj не имеет родительского id, но имеет потомков
        if (node.children.length) {
            createNode(node.children, id, name);
        }
    }
    return nodes;
};