import React, { useEffect } from 'react';
import Users from './index';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Folders_api } from '../../api/users';
import { setUsers, setProfile } from '../../redux/reducer/users';
import { User } from '../../ts/users';

function UserContainer() {
    const { task, unresolvedTickets, blockNumber, usersTable, profile} = useAppSelector((state) => state.usersSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
    (async function() {
       const users = await Folders_api.getUsers();
       dispatch(setUsers(users));
    })();
    }, []);

    const infoProfile =(info:User)=>{
        dispatch(setProfile(info));
    }

    return ( <Users
         task={task} 
         blockNumber={blockNumber} 
         unresolvedTickets={unresolvedTickets} 
         usersTable={usersTable}
         profile={profile}
         setProfile={infoProfile}
         />);
}

export default UserContainer;
