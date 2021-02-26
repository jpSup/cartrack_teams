

import {useMapData} from "../Queries/useMapData"

import styles from "./mapview.module.css"

const Mapview = ( {mapCoords} ) => {

    console.log('mapview'+mapCoords)

    const { status, data, error } = useMapData( mapCoords );

    return (
        <>

            {status === "loading" ? (
                "Loading..."
            ) : status === "error" ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                
                    <img className={styles.mapimage} src={data} alt="user location"  />
                
                </>
            )}

          </>

    )
}





export default Mapview