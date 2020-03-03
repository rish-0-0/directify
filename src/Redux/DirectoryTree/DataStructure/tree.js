import { Node } from "./node";

export class Tree {
    constructor(root) {
        this.root = root || null;
    }

    traverse(root=this.root, callback) {
        const goThrough = (node) => {
            callback(node);
            node.children.forEach((child) => {
                goThrough(child);
            });
        };
        goThrough(root);
    }

    addNode(value, parentValue) {
        const newNode = {
            value,
            children: [],
        };

        if (!this.root) {
            this.root = newNode;
            return this.root;
        }

        this.traverse(this.root,(node) => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }

    removeNode(value) {
        this.traverse(this.root,(node) => {
            node.children.forEach((childNode, index) => {
                if (childNode.value === value) {
                    node.children.splice(index, 1);
                }
            });
        })
    }

    getParent(value) {
        if (value === this.root.value) {
            return null;
        }
        let parent = new Node(null, []);
        this.traverse(this.root, (node) => {
            node.children.forEach((childNode) => {
                if (childNode.value === value) {
                    parent = node;
                }
            });            
        });
        return parent;
    }
}