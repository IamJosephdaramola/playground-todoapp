import { useContext } from "react"
import { authContext } from "../store"

const useAuthContextData = () => {
    const data = useContext(authContext);


    return data;
}

export { useAuthContextData }