import { useEffect } from 'react';
import Router from './router';
import { useTodosContextData } from './hooks/use-todos-context';

const App = () => {
    const { getSession } = useTodosContextData();

    useEffect(() => {
        getSession()
    }, [])

    return <Router />;
};
export default App;
