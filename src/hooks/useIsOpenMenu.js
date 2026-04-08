import { useState } from "react";


export function useIsOpenMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);


    return { isOpen, setIsOpen, onClose }
}