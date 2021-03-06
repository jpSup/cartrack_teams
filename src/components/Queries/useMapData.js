import axios from "axios";
import { useQuery } from "react-query";


export const useMapData = (coords) => {
 
    return useQuery(["mapData", coords], async () => {

       if (coords !== undefined){
                        
            const { data } = await axios.get(
                `https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=${coords}&z=1&apiKey=OOUoScW3pCaXAXy1TdW6Hitymg0WQ7sSxyi1E3q4H_E`,
                {
                    responseType: "blob"
                }
            );
    
            return URL.createObjectURL(data)

        }else{
            return '#'
        }

        
    });
    

}