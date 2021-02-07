import React, { useContext } from "react";
import { FireStoreContext } from "../context/FireStoreContext";
import { useHistory } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {List} from '@material-ui/icons';

const ListCollectionLayout = () => {
    const fireStoreContext = useContext(FireStoreContext);

    return (
        <>
            {fireStoreContext.initialStore.list.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        onClick={() => {
                            fireStoreContext.streamListTasks(item.id);
                        }}
                    >
                        <ListItemIcon><List /></ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                );
            })}
        </>
    );
};

export default ListCollectionLayout;
