import { Button } from "retro-byte-ui"
import style from "./modal.module.css"
import { useState } from "react"

interface modalProps {
    modalContent: string,
    buttonChildren: string,
    closeButtonChildren: string,
    onclick?: () => void
}

export const Modal: React.FC<modalProps> = ({ modalContent, buttonChildren, closeButtonChildren, onclick }) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        if (!open) setOpen(true)
        else setOpen(false)
    }

    const handleClose = () => {
        // event.preventDefault()
        setTimeout(() => {
            handleOpen()
            if (onclick) onclick()
        }, 300);

    }
    const handleBackdropClick = () => {
        handleOpen()
    };
    const handleModalClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        e.stopPropagation();
    };

    return (
        <>
            <Button onClick={handleOpen}> {buttonChildren} </Button>
            {open &&
                <div className={style.modalWrapper} onClick={handleBackdropClick}>
                    <dialog open className={style.dialog} onClick={handleModalClick}>
                        <div>
                            {modalContent}
                        </div>
                        <form method="dialog" className={style.form}>
                            <div className={style.button}>
                                <Button onClick={handleClose}> {closeButtonChildren} </Button>
                            </div>
                        </form>
                    </dialog>
                </div>

            }
        </>
    )
}