import { createContext } from "react";

interface ContextProps {
    openSidebar: boolean;
    closeMenuSidebar: () => void;
    openMenuSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);