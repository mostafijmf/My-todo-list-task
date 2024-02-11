import { useState } from 'react';
import AddTask from '../Components/AddTask';
import useGetTaskData from '../Hooks/useGetTaskData';
import TaskList from '../Components/TaskList';

const Home = () => {
    const [openAddForm, setOpenAddForm] = useState(false);
    const [taskData] = useGetTaskData();

    return (
        <div className='max-w-3xl w-full h-full mx-auto py-10'>
            <header>
                <h1 className='text-2xl font-medium text-center uppercase text-gray-600 pb-2 mb-5 border-b'>Todo List</h1>
                <div className='flex justify-end'>
                    <button
                        onClick={() => setOpenAddForm(true)}
                        className='bg-indigo-600 hover:bg-indigo-700 duration-300 text-white px-12 py-3 text-lg font-medium rounded'
                    >
                        Add Task
                    </button>
                </div>
                {openAddForm ? <AddTask setOpenAddForm={setOpenAddForm} /> : null}
            </header>
            <section>
                {taskData.length > 0 ?
                    <ul className='mt-5 flex flex-col gap-y-5'>
                        {
                            taskData.map((data, index) => <TaskList key={index} data={data} />)
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