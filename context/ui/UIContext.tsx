import { createContext } from "react";

interface ContextProps {
    openSidebar: boolean;
}

export const UIContext = createContext({} as ContextProps);