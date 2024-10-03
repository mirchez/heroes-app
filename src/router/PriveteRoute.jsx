import { useContext, useEffect } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"


export const PriveteRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation()

    const lastPath = `${pathname}${search}`

    useEffect(() => {
        localStorage.setItem('lastPath', lastPath)
    }, [lastPath])
    
    

    return (logged)
    ? children
    : <Navigate to='/login'/>
}


