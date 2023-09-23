import { TodosContainer, AddTodo } from '../components/index';

const Home = () => {
    return (
        <div className="pb-5 ">
           
            <AddTodo />
            <TodosContainer />
        </div>
    );
};
export default Home;
