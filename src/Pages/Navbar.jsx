import { useState } from "react";
import AddTask from "../Components/AddTask";

const Navbar = ({ taskData, setPriority }) => {
    const [openAddForm, setOpenAddForm] = useState(false);

    // <!-- Count Completed Task -->
    let countCompleted = 0;
    taskData.map(t => t.isComplete ? countCompleted++ : null);

    return (<>
        {openAddForm ? <AddTask setOpenAddForm={setOpenAddForm} /> : null}
        <div>
            <div className='flex md:flex-row flex-col justify-between items-center gap-5 text-base font-medium text-gray-700'>
                <div>
                    <p>Total Task ({taskData.length})</p>
                </div>
                <div>
                    <p>Completed ({countCompleted})</p>
                </div>
                <div>
                    <p>Filter Priority &nbsp;
                        <select
                            id='priority'
                            className='outline-none border text-base font-normal border-indigo-600 rounded'
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value=''>Reset</option>
                            <option value='Low'>Low</option>
                            <option value='Medium'>Medium</option>
                            <option value='High'>High</option>
                        </select></p>
                </div>
                <button
                    onClick={() => setOpenAddForm(true)}
                    className='bg-indigo-600 hover:bg-indigo-700 duration-300 text-white px-12 py-3 text-lg font-medium rounded'
                >
                    Add Task
                </button>
            </div>
        </div>
    </>);
};

export default Navbar;