import { useEffect, useRef, useState, useCallback } from "react";

export function useHandleOutsideClick() {
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
        }, 10000);

        //Clean up function
        return () => clearInterval(timer);
    }, [isOpen])


    useEffect(() => {
        const handleOutsideClick = function (e) {
            if (ref.current && !ref.current.contains(e.target)) return handleCloseModal();
        }

        document.addEventListener("click", handleOutsideClick, true);

        //Clean up function
        return () => removeEventListener("click", handleOutsideClick, true)
    }, [handleCloseModal]);




    useEffect(() => {
        const handleEscapeKey = function (e) {
            if (e.key === "Escape") return handleCloseModal();
        }

        document.addEventListener("keydown", handleEscapeKey,);

        //Clean up function
        return () => removeEventListener("keydown", handleEscapeKey,)
    }, [handleCloseModal]);


    return { isOpen, handleCloseModal }
}