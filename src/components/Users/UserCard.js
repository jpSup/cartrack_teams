import styles from "./UserCard.module.css"
import Mapview from "../Mapview/Mapview"


const UserCard = ( { user } ) => (
        
        
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
                                <div>User id: {user.id}</div>
                            </div>
                        

                            <div className={styles.user_username}>
                                <div>Username: {user.username}</div>
                            </div>

                        </div>

                    </section>

                    <section className={styles.user_row}>

                        <h3>Address</h3>

                        <div className={styles.section_data}>

                            <address className={styles.user_address}>

                                {
                                    Object.keys(user.address).map((keyName, keyIndex) => {
                                        
                                        if( typeof user.address[keyName] !== "object" ) {
                                            return(
                                                <div><b>{keyName}</b>: {user.address[keyName]}</div>
                                            )
                                        }

                                       

                                    })
                                }
                            
                            </address>

                        </div>
                    </section>

                    <section className={styles.user_row}>
                            
                            <h3>Map Data</h3>

                            <div className={styles.section_data}>
                                <div>{`${user.address.geo.lat}%2C${user.address.geo.lng}` }</div>
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
                                            <div ><b><em>{keyName}</em></b>: {user.company[keyName]}</div>
                                        )
                                    }

                                   

                                })
                            }

                        </div>

                            
                    </section>

                </div>

                <div className={styles.user_detail_bottom}>
                    <a className={styles.user_email} href={`mailto:${user.email}`} ></a>
                    <a className={styles.user_website} href={`http://wwww.${user.website}`} target="_blank"></a>
                    <a className={styles.user_phone} href={`tel:${user.phone}`}></a>
                </div>
            
            </div>

        </div>
   
)


export default UserCard



