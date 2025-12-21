'use client';

import {Menu, X} from "lucide-react";

export default function MobileBurgerX({isOpen, toggleMenu}: {isOpen: boolean; toggleMenu: () => void}) {
    return (
        <button onClick={toggleMenu} className="text-secondary hover:text-accent1 transition-colors hover:scale-105 cursor-pointer">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
}