import { useEffect, useRef, useState, useCallback } from "react";

export function useHandleOutsideClick(listening = true) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null)
    console.log(isOpen);

    const handleCloseModal = useCallback(() => {
        setIsOpen(false);
    });


    //Automatic display of the modal
    useEffect(() => {
        const timer = setInterval(() => {
            if (isOpen) return;
            setIsOpen(true);
        }, 20000);

        //Clean up function
        return () => clearInterval(timer);
    }, [isOpen])


    //
    useEffect(() => {
        const handleOutsideClick = function (e) {
            if (ref.current && !ref.current.contains(e.target)) return handleCloseModal();
        }

        document.addEventListener("click", handleOutsideClick, listening);

        //Clean up function
        return () => document.removeEventListener("click", handleOutsideClick, listening)
    }, [handleCloseModal, listening]);




    useEffect(() => {
        const handleEscapeKey = function (e) {
            if (e.key === "Escape") return handleCloseModal();
        }

        document.addEventListener("keydown", handleEscapeKey,);

        //Clean up function
        return () => removeEventListener("keydown", handleEscapeKey,)
    }, [handleCloseModal]);


    return { isOpen, handleCloseModal, ref }
}