import React, { Component } from 'react';

import Node from '../Node/index';

export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.root = this.props.tree.root;
    }

    render() {
        this.props.tree.traverse(this.root, (node) => {
            console.log(node.value);
        });

        if (!this.root) {
            return null;
        }
        return (
            <Node tree={this.props.tree} node={this.root} subDirectories={this.root.children} />
        );
    }
}