import axios from "axios";
import { useQuery } from "react-query";


export const useUserData = ( userFilter ) => {
 
    const fetchUsers = async () => {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/`
        );
      
        return data;
    };


    
    return useQuery("users", fetchUsers,
    {
        select: (users) => {           

            const regex = new RegExp(`${userFilter.dataFilter.term}`, "i")
            let result = users

            switch (userFilter.dataFilter.type) {
                case "all":                    
                    break;
                case "email":

                    result = users.filter(
                        user => {
                            return regex.test(user.email)
                        }
                    )

                    break;
                case "name":
                                
                    result = users.filter(
                        user => {
                            return regex.test(user.name)
                        }
                    )

                    break;
            
                default:                    
                    break;
            }

            return result
        }
    })
}


    /*
    return useQuery(["userData", userFilter], async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        ), {
            select: 
        };

        
        
        
    });

    */
