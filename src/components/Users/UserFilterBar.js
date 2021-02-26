import { useState } from "react"
import styles from "./UserFilterBar.module.css"
 
const UserFilterBar = ( { doSearch } ) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className={styles.filterbar_container}>
            
            <div className={styles.filterBar_items}>
                <input placeholder="Search" type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
                <div className={styles.filter_buttons}>
                    <button onClick={() => doSearch(searchValue, 'email')}>Filter By Email</button>
                    <button onClick={() => doSearch(searchValue, 'name')}>Filter By Name</button>
                    <button onClick={() => {
                            doSearch(searchValue, 'all')
                            setSearchValue('')
                        }
                    }>
                        Show All
                        </button>
                </div>
            </div>

        </div>
    )

}




export default UserFilterBar