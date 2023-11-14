import { createContext } from "react";

interface ContextProps {
    //Sidebar
    openSidebar: boolean;
    closeMenuSidebar: () => void;
    openMenuSidebar: () => void;

    //Add entry
    isAdding: boolean;
    openAddEntry: () => void;
    closeAddEntry: () => void;

}

export const UIContext = createContext({} as ContextProps);