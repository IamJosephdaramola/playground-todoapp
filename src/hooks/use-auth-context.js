
import { useSelector } from 'react-redux'

const useAuthContextData = () => {
    const data = useSelector((state) => state.auth)

    return data;
}

export { useAuthContextData }