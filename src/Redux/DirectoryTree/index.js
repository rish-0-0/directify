import { Node } from './DataStructure/node';
import { Tree } from './DataStructure/tree';
import * as Actions from './Actions';
const root = new Node('root', []);
const directoryTree = new Tree(root);
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