import { useEffect, useRef, useState, useCallback } from "react";

export function useHandleOutsideClick(listening = true) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null)
    console.log(isOpen);

    const handleCloseModal = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);


    //1. Automatic display of the modal
    useEffect(() => {
        const timer = setInterval(() => {
            if (isOpen) return;
            setIsOpen(true);
        }, 40000);

        //Clean up function
        return () => clearInterval(timer);
    }, [isOpen]);


    //2. 
    useEffect(() => {
        //Checking if the the DOM element exists and does not contain the clicked element 
        const handleOutsideClick = function (e) {
            if (ref.current && !ref.current.contains(e.target)) return handleCloseModal();
        }

        document.addEventListener("click", handleOutsideClick, listening);

        //Clean up function
        return () => document.removeEventListener("click", handleOutsideClick, listening)
    }, [handleCloseModal, listening]);



    //3. 
    useEffect(() => {
        //Checking if the clicked element is equal to the ESCAPE key
        const handleEscapeKey = function (e) {
            if (e.key === "Escape") return handleCloseModal();
        }

        document.addEventListener("keydown", handleEscapeKey);

        //Clean up function
        return () => removeEventListener("keydown", handleEscapeKey)
    }, [handleCloseModal]);


    return { isOpen, handleCloseModal, ref }
}