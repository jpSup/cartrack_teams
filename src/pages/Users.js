//import styles from '../styles/Users.module.css'
import { QueryClient, QueryClientProvider } from "react-query"
import UsersList from "../components/Users/UsersList"

const queryClient = new QueryClient()

const Users = () => (

    <QueryClientProvider client={queryClient}>
        <UsersList />
    </QueryClientProvider>

)

export default Users