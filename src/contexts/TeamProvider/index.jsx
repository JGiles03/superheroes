import React, { useState, useContext, createContext } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [teamData, setTeamData] = useState([]);

    return (
        <TeamContext.Provider value={{ teamData, setTeamData }}>
            {children}
        </TeamContext.Provider>
    );
};

export const useTeam = () => useContext(TeamContext);