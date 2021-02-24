import React, { useState } from "react"

import UserCard from "./UserCard"
import { useUserData } from "../Queries/UserData"
import UserFilterBar from "./UserFilterBar"



import styles from "./UserList.module.css"


const UsersList = () => {

    const [dataFilter, setDataFilter] = useState({type: "all", term: ""})

    const { status, data, error } = useUserData( {dataFilter} );

    return (

        <>
            <h1 className={ `${styles.usertitle}` }>Users</h1>
            <UserFilterBar doSearch = {(term, type) => setDataFilter({
                    ...dataFilter,
                    type: type,
                    term: term
            })} />
            <div className={styles.userlist_container}>
                
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) :  ( 
                        <>
                            {data.map((user) => (
                                <UserCard user={user} key={user.id} />                                                                       
                            ))}
                        </>
                    )                                      
                        
                }
            </div>
        </>
        
    )

}

export default UsersList