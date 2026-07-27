// import the FlashMessage hook
import { useFlashMessage } from "./FlashMessageStore";

export default function FlashMessageDisplay() {

    const { flashMessage } = useFlashMessage();

    return <>
    {
        FlashMessageDisplay.message && (<div className={`flash alert alert-${useFlashMessage.type}`}>
            {useFlashMessage.message}
        </div>) 
    }
    </>
}