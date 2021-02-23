import axios from "axios";
import { useQuery } from "react-query";


export const useUserData = () => {
    return useQuery("userData", async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return data;
    });
}