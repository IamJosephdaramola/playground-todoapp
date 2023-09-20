<<<<<<< HEAD
import Router from './router';

const App = () => {
=======
import { useEffect } from 'react';
import Router from './router';
import { useTodosContextData } from './hooks/use-todos-context';

const App = () => {
    const { getSession } = useTodosContextData();

    useEffect(() => {
        getSession()
    }, [])

>>>>>>> 593acf49092be174e4a1b4cf0949c509e27d4a05
    return <Router />;
};
export default App;
