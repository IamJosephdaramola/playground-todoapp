import { TodosContainer, AddTodo } from '../components/index';
import { useAuthContextData } from "../hooks";

const Home = () => {
    const { user } = useAuthContextData()

    const name = `${user.user_metadata.first_name} ${user.user_metadata.last_name[0].toUpperCase()}.`

    return (
        <div className="pt-28 md:pt-40">
            <h1 className="text-2xl text-center mb-5">
                Welcome, {' '}
                <span className="font-medium">{name}</span>
            </h1>
            <p className="mb-10 text-center px-10">
                Let me be helpful with your todo list
            </p>
            <AddTodo />
            <TodosContainer />
        </div>
    );
};
export default Home;
