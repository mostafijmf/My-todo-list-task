import useGetTask from "../Hooks/useGetTask";

const AddTask = ({ setOpenAddForm, data = '' }) => {
    const [taskData] = useGetTask();

    // <!-- Save Task Data to Local Storage -->
    const handleSaveTask = (e) => {
        e.preventDefault();

        // <!-- Edit Task -->
        if (data) {
            let index;
            const filter = taskData.filter((f, i) => {
                if (f.id === data.id) index = i;
                return f.id !== data.id;
            });
            filter.splice(index, 0, {
                id: data.id,
                task: e.target.task.value,
                priority: e.target.priority.value,
                isComplete: data.isComplete,
            });
            localStorage.setItem('taskData', JSON.stringify(filter));
        }
        // <!-- Add new Task -->
        else {
            localStorage.setItem('taskData', JSON.stringify([
                ...taskData,
                {
                    id: Math.floor(Math.random() * 900000) + 100000,
                    task: e.target.task.value,
                    priority: e.target.priority.value,
                    isComplete: false,
                }
            ]));
        }
        window.location.reload();
        setOpenAddForm(false);
    };

    return (
        <div className='fixed inset-0 bg-black/60 grid place-items-center'>
            <form
                onSubmit={handleSaveTask}
                className='max-w-xl w-full h-max p-10 rounded-md bg-white text-base text-gray-700'
            >
                <div>
                    <label htmlFor='task' className='font-medium mb-2 block'>Add Task</label>
                    <input
                        id='task'
                        type='text'
                        placeholder='Type here...'
                        required
                        defaultValue={data.task}
                        className='w-full h-11 px-5 outline-none border border-indigo-600 rounded'
                    />
                </div>
                <div className='mt-8'>
                    <label htmlFor='priority' className='font-medium mb-2 block'>Select Priority</label>
                    <select
                        required
                        id='priority'
                        className='w-full h-11 px-5 outline-none border border-indigo-600 rounded'
                    >
                        <option value='Low' defaultValue={data.priority}>Low</option>
                        <option value='Medium' defaultValue={data.priority}>Medium</option>
                        <option value='High' defaultValue={data.priority}>High</option>
                    </select>
                </div>
                <div className='mt-12 flex items-center gap-x-16'>
                    <div
                        className='w-full py-3 text-lg font-medium rounded grid place-items-center border border-indigo-600 hover:bg-gray-100 cursor-pointer duration-300'
                        onClick={() => setOpenAddForm(false)}
                    >
                        Cancel
                    </div>
                    <button
                        className='w-full bg-indigo-600 text-white py-3 text-lg font-medium rounded border border-indigo-600 hover:bg-indigo-700 duration-300'
                        type="submit"
                    >
                        Save Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
