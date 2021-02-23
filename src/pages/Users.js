//import styles from '../styles/Users.module.css'
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import UsersList from "../components/Users/UsersList"

const queryClient = new QueryClient()

const Users = () => (

    <QueryClientProvider client={queryClient}>
        <UsersList />
        <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>

)

export default Users