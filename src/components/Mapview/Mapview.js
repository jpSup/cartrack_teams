

import {useMapData} from "../Queries/useMapData"

import {  
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const Mapview = ( {coords} ) => (

    <QueryClientProvider client={queryClient}>
        <Mapdata coords={coords} />
        <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
)



const Mapdata = ({coords}) => {
    const { status, data, error } = useMapData({coords});

    return (
        <>

            {status === "loading" ? (
                "Loading..."
            ) : status === "error" ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                
                <div>
                    {data}
                </div>
                
                </>
            )}

          </>

    )
}





export default Mapview