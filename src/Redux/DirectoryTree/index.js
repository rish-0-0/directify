import { Node } from './DataStructure/node';
import { Tree } from './DataStructure/tree';
import * as Actions from './Actions';
const root = new Node('root', []);
const directoryTree = new Tree(root);
directoryTree.addNode('First', 'root');
directoryTree.addNode('Second', 'root');
directoryTree.addNode('Third', 'Second');
directoryTree.addNode('Fourth', 'First');
directoryTree.addNode('Fifth', 'First');
const initState = {
    mainTree: directoryTree,
};
export default function folderReducer (state=initState, action) {
    switch(action.type) {
        case Actions.MAKE_NEW_DIRECTORY:
            state.mainTree.addNode(action.payload.name, action.payload.parentName);
            return {
                mainTree: state.mainTree,
            };
        default:
            return state;
    }
}