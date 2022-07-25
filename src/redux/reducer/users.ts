import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState} from '../../ts/users';

const initialState:UserState = {
    blockNumber:[
        {name: "active", number: 60},
        {name: "Online", number: 16},
        {name: "Filtered", number: 43},
        {name: "Banned", number: 64}
    ],
    task:[
        {name: "Finish ticket update", checked: false, date: 'urgent'},
        {name: "Create new ticket example", checked: false, date: 'new'},
        {name: "Update ticket report", checked: true, date: 'default'}
    ],
    unresolvedTickets:[
        {name: "Waiting on Feature Request", number: 4328},
        {name: "Awaiting Customer Response", number: 1005},
        {name: "Awaiting Developer Fix", number: 914},
        {name: "Pending", number: 281},
    ],
    usersTable:[],
    profile:{
        "id": 0,
        "name": '',
        "username": '',
        "email": '',
        "address": {
          "street": '',
          "suite": '',
          "city":  '',
          "zipcode":''
        },
        "phone": '',
        "website": '',
        "company": {
          "name": '',
          "catchPhrase": '',
        }
    }
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserState['usersTable']>) => {
            state.usersTable = action.payload
        },
        setProfile:(state, action: PayloadAction<UserState['profile']>) => {
            state.profile = action.payload
        }
    }
});

export const { setUsers, setProfile} = usersSlice.actions;

export default usersSlice.reducer;
