import { Node } from "./node";

export class Tree {
    constructor(root) {
        this.root = root || null;
    }

    traverse(callback) {
        const goThrough = (node) => {
            callback(node);
            node.children.forEach((child) => {
                goThrough(child);
            });
        };

        goThrough(this.root);
    }

    addNode(value, parentValue) {
        const newNode = new Node(value, []);

        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        this.traverse((node) => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }

    removeNode(value) {
        this.traverse((node) => {
            node.children.forEach((childNode, index) => {
                if (childNode.value === value) {
                    node.children.splice(index, 1);
                }
            });
        })
    }
}