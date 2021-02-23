
import { useUserData } from "../Queries/UserData"


const UsersList = () => {

    const { status, data, error } = useUserData();

    return (

        <div>
            <h1>Users</h1>
            <div>
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                            <>
                                <div>
                                    {data.map((user) => (
                                        <h2 key={user.id}>{user.name}</h2>                                        
                                    ))}
                                </div>                                
                            </>
                        )}
            </div>
        </div>

    )

}

export default UsersList