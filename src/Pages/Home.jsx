import { useState } from 'react';
import TaskList from '../Components/TaskList';
import useGetTask from '../Hooks/useGetTask';
import Navbar from './Navbar';

const Home = () => {
    const [taskData] = useGetTask();
    const [priority, setPriority] = useState(null);

    return (
        <div className='max-w-3xl w-full h-full mx-auto py-10'>
            <header>
                <h1 className='text-2xl font-medium text-center uppercase text-gray-600 pb-2 mb-5 border-b'>
                    Todo List
                </h1>
                <Navbar taskData={taskData} setPriority={setPriority} />
            </header>
            <section>
                {taskData.length > 0 ?
                    <ul className='mt-5 flex flex-col gap-y-5'>
                        {
                            taskData.filter(f => priority ? f.priority === priority : f)
                                .map((data, index) => <TaskList key={index} data={data} />)
                        }
                    </ul>
                    :
                    <>
                        <p className='text-center py-20 text-xl text-gray-600'>No tasks to show! <br />Please add task</p>
                    </>
                }
            </section>
        </div>
    );
};

export default Home;