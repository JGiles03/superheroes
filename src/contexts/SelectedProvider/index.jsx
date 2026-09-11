import React, { useState, useContext, createContext } from "react";

const SelectedContext = createContext();

export const SelectedProvider = ({ children }) => {
    const [selectedData, setSelectedData] = useState({});

    return (
        <SelectedContext.Provider value={{ selectedData, setSelectedData }}>
            {children}
        </SelectedContext.Provider>
    );
};

export const useSelected = () => useContext(SelectedContext);