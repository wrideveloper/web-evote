import React, { createContext, useState, useCallback } from 'react';
import APISOURCE from '../constants/Api-Source';

export const MyContext = createContext({
  users: [], 
  getAllUsers: () => {}, 
  userId: [], 
  getUserById: () => {}, 
  calon: [], 
  getAllCalon: () => {},
  setCalon: () => {},
  vote: [],
  getAllVote: () => {},
  setVote: () => {},
  isMounted: false,
});

const ApiContext = (props) => {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState([])
    const [calon, setCalon] = useState([])
    const [vote, setVote] = useState([])
    const [isMounted, setIsMounted] = useState(false);

    const getAllUsers = useCallback(async () => {
        const user = await APISOURCE.getListUsers();
        // console.log('line 13 Api Context ~ user ', user)
        setUsers(user);
        setIsMounted(true)
    }, []);

    const getUserById = async (id) => {
        const user = await APISOURCE.getUserById(id);
        // console.log('line 18 Api Context ~ userId ', user)
        setUserId(user);
    };

    const getAllCalon = useCallback(async () => {
        const calon = await APISOURCE.getCalon();
        // console.log('line 25 Api Context ~ calon ', calon)
        setCalon(calon);
    }, [])


    const getAllVote = useCallback( async () => {
        const vote = await APISOURCE.getAllVote();
        // console.log('line 42 Api Context ~ vote ', vote)
        setVote(vote);
    }, [])

    const contextValue = {
        users, 
        getAllUsers, 
        userId, 
        getUserById, 
        calon, 
        getAllCalon, 
        vote, 
        setVote,
        getAllVote,
        isMounted
    };

    return (
        <MyContext.Provider value={contextValue}>{props.children}</MyContext.Provider>
    );
};

export default ApiContext;