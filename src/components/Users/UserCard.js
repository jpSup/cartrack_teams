import { useState } from "react";
import Mapview from "../Mapview/Mapview";
import styles from "./UserCard.module.css"


const UserCard = ( { user } ) => {

    const [mapCoords, setMapCoords] = useState(undefined)
    const [showHiddenWorld, setShowHiddenWorld] = useState(false)

    const fetchMap = (e, address) => {
        
        setShowHiddenWorld(true)
        e.preventDefault();
        setMapCoords(address)
    }
        
       return ( 
        <div className={styles.userCard}>
            <div className={styles.userImage_box}>
                <div className={styles.user_name}>
                    {user.name}
                </div>          
            </div>

            <div className={styles.userDetail_box}>
                <div className={styles.userDetail_top}>
                        
                    <section className={styles.user_row}>

                        <h3>User Meta</h3>

                        <div className={styles.section_data}>
                            
                            <div className={styles.user_id}>
                                <div><b>user id:</b> {user.id}</div>
                            </div>
                        

                            <div className={styles.user_username}>
                                <div><b>username:</b> {user.username}</div>
                            </div>

                            <div className={styles.user_name}>
                                <div><b>name:</b> {user.name}</div>
                            </div>

                            <div className={styles.user_email}>
                                <div><b>email:</b> {user.email}</div>
                            </div>

                        </div>

                    </section>

                    

                    <section className={styles.user_row}>

                        <h3>Company</h3>
                        
                        <div className={styles.section_data}>

                            {
                                Object.keys(user.company).map((keyName, keyIndex) => {
                                    
                                    if( typeof user.company[keyName] !== "object" ) {
                                        return(
                                            //to do add in unique index
                                            <div key={keyIndex} ><b><em>{keyName}</em></b>: {user.company[keyName]}</div>
                                        )
                                    }

                                   

                                })
                            }

                        </div>

                            
                    </section>

                </div>

                <div className={styles.user_detail_bottom}>
                    <a className={styles.user_email} href={`mailto:${user.email}`} > </a>
                    <button className={styles.user_website} onClick={(event) => fetchMap(event, `${user.address.geo.lat}%2C${user.address.geo.lng}`) } ></button>
                    <a className={styles.user_phone} href={`tel:${user.phone}`}> </a>
                </div>

                <div className={ `${styles.user_hidden_world} ${showHiddenWorld ? styles.showHiddenWorld : ""}` }>
                        
                        <section className={ `${styles.user_row} ${styles.mapviewer_address}` }>

                            <h3>Address</h3>

                            <div className={styles.section_data}>

                                <address className={styles.user_address}>

                                    {
                                        Object.keys(user.address).map((keyName, keyIndex) => {
                                            
                                            if( typeof user.address[keyName] !== "object" ) {
                                                return(
                                                    <div key={keyIndex}><b>{keyName}</b>: {user.address[keyName]}</div>
                                                )
                                            }

                                        })
                                    }
                                
                                </address>

                            </div>
                        </section>

                        <section className={ `${styles.user_row} ${styles.mapviewer}` }>
                            {mapCoords !== undefined &&
                               <Mapview mapCoords={mapCoords} />                                
                            }
                        </section>
                        <button className={styles.mapClose} onClick={()=> setShowHiddenWorld(false)}>
                            X
                        </button>                        
                </div>
            
            </div>

        </div>
        )
}


export default UserCard



