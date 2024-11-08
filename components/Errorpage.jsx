import { useRouteError } from "react-router-dom"
const Errorpage = ()=>{
    const error = useRouteError();
    return(
        <>
        <h2>Oops!</h2>
        <h3>Something went wrong!!!</h3>
        <h4>{`${error.status}:${error.statusText}`}</h4>
        </>  
    )
}
export default Errorpage;