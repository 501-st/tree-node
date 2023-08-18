import { TreeNode } from "../../App";

export const editNode = (nodes: TreeNode[], id: number, name: string) => {
    for (const node of nodes) {
        // обрабатывает случай когда obj с родительским id находится на первом уровне
        if (node.id === id) {
            node.name = name
            return nodes;
        }
        // обрабатывает случай когда obj не имеет родительского id, но имеет потомков
        if (node.children.length) {
            editNode(node.children, id, name);
        }
    }
    return nodes;
};