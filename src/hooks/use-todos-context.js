import { useSelector } from 'react-redux';

const useTodosContextData = () => {
    const data = useSelector((state) => state.todo);
    return data;
};

export { useTodosContextData };
