import { MAKE_NEW_DIRECTORY } from ".";

export function makeNewDirectory(name, parentId) {
    return {
        type: MAKE_NEW_DIRECTORY,
        payload: {
            parentId,
            name,
        },
    };
}