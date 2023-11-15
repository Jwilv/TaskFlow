import { createContext } from "react";

interface ContextProps {
    //Sidebar
    openSidebar: boolean;
    closeMenuSidebar: () => void;
    openMenuSidebar: () => void;

    //Drag
    isDragging: boolean;
    setDragging: (status: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);