import {atom, useAtom} from "jotai";

const flashMessageAtom = atom({
    "message": "",
    // based on the Bootstrap Alert components
    "type": "info"
})

// create the hook

export const useFlashMessage = () => {

    // give the useFlashMessage the ability to read and to update the atom
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessage = (message, type="info") => {
        setFlashMessage({
            message, type
        });
    }

    // whatever we return from a hook funtion can be used by
    // other React components
    return {
        showMessage,
        flashMessage 
    }
}