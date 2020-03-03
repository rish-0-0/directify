import { MAKE_NEW_DIRECTORY } from ".";

export function makeNewDirectory(name, parentName) {
    return {
        type: MAKE_NEW_DIRECTORY,
        payload: {
            parentName,
            name,
        },
    };
}