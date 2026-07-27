// import the FlashMessage hook
import { useFlashMessage } from "./FlashMessageStore";

export default function FlashMessageDisplay() {
    const { flashMessage } = useFlashMessage();

    if (!flashMessage?.message) {
        return null;
    }

    return (
        <div className={`flash alert alert-${flashMessage.type}`}>
            {flashMessage.message}
        </div>
    );
}