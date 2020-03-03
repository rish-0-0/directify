import { Node } from './DataStructure/node';
import { Tree } from './DataStructure/tree';
const root = new Node('root', []);
const directoryTree = new Tree(root);
const initState = {
    mainTree: directoryTree,
};
export default function folderReducer (state=initState, action) {
    switch(action.type) {
        default:
            return state;
    }
}