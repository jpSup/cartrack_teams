import { useState } from "react"
import styles from "./UserFilterBar.module.css"
 
const UserFilterBar = ( { doSearch } ) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className={styles.filterbar_container}>
            
            <div className={styles.filterBar_items}>
                <input type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <button onClick={() => doSearch(searchValue, 'email')}>filterBy email</button>
                <button onClick={() => doSearch(searchValue, 'name')}>filter by name</button>
            </div>

        </div>
    )

}




export default UserFilterBar