import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const protectedRoute = (Component) => {
    return () => {
        const history = useHistory();
        useEffect(() => {
            const user = JSON.parse(localStorage.getItem('loggedUser'));
            if (!user) {
                history.push('/');
            }
        }, [history]);

        return <Component />
    }
}

export default protectedRoute;
