'use client';

import {Menu, X} from "lucide-react";

export default function MobileBurgerX({isOpen, toggleMenu}: {isOpen: boolean; toggleMenu: () => void}) {
    return (
        <button onClick={toggleMenu} className="text-navbarSecondary hover:text-navbarTextHover transition-colors hover:scale-105">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
}