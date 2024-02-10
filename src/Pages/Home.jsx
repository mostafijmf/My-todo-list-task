import { useState } from 'react';
import AddTask from '../Components/AddTask';

const Home = () => {
    const [openAddForm, setOpenAddForm] = useState(false);
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
        </div>
    );
};

export default Home;