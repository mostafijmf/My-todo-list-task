import { useState } from "react";
import useGetTask from "../Hooks/useGetTask";
import AddTask from "./AddTask";

const TaskList = ({ data }) => {
    const [taskData] = useGetTask();
    const [edit, setEdit] = useState(null);

    // <!-- Complete Task -->
    const handleCompleteTask = () => {
        let index;
        const filter = taskData.filter((f, i) => {
            if (f.id === data.id) index = i;
            return f.id !== data.id;
        });
        filter.splice(index, 0, {
            ...data,
            isComplete: true,
        });
        localStorage.setItem('taskData', JSON.stringify(filter));
        window.location.reload();
    };

    // <!-- Delete Task -->
    const handleDeleteTask = () => {
        const filter = taskData.filter(f => f.id !== data.id);
        localStorage.setItem('taskData', JSON.stringify(filter));
        window.location.reload();
    };

    return (<>
        <li className={`border rounded-xl shadow-md p-5 text-black ${data.priority === 'High' && 'bg-emerald-200' || data.priority === 'Medium' && 'bg-amber-200' || data.priority === 'Low' && 'bg-red-200'}`}>

            <div className="flex md:flex-row flex-col md:items-center items-start gap-5">
                <div className="md:w-80 w-full">
                    <p className="text-base flex items-start gap-x-1">
                        <span className="font-medium">Task:</span>
                        <span>{data.task}</span>
                    </p>
                </div>
                <div className="md:w-32 w-full">
                    <p className="text-base flex items-start gap-x-1">
                        <span className="font-medium">Priority:</span>
                        <span>{data.priority}</span>
                    </p>
                </div>
                <div className="md:w-max w-full flex items-center justify-between gap-6">
                    <div className="">
                        {
                            data.isComplete ?
                                <button disabled className="w-max text-indigo-600 bg-indigo-100 py-2 px-5 text-base font-medium rounded">
                                    &#10003; Completed
                                </button>
                                :
                                <button
                                    onClick={handleCompleteTask}
                                    className='w-full bg-indigo-600 text-white py-2 px-5 text-base font-medium rounded hover:bg-indigo-700 duration-200'
                                >
                                    Complete
                                </button>
                        }
                    </div>
                    <button
                        className='w-max text-gray-700 hover:text-indigo-600 duration-200'
                        onClick={() => setEdit(data)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32"><path fill="currentColor" d="M25 4.031c-.766 0-1.516.297-2.094.875L13 14.781l-.219.219l-.062.313l-.688 3.5l-.312 1.468l1.469-.312l3.5-.688l.312-.062l.219-.219l9.875-9.906A2.968 2.968 0 0 0 25 4.03zm0 1.938c.234 0 .465.12.688.343c.445.446.445.93 0 1.375L16 17.376l-1.719.344l.344-1.719l9.688-9.688c.222-.222.453-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2z" /></svg>
                    </button>
                    <button
                        className='w-max text-gray-700 hover:text-red-600 duration-200'
                        onClick={handleDeleteTask}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z" /></svg>
                    </button>
                </div>
            </div>
        </li>
        {
            edit ? <AddTask data={edit} setOpenAddForm={setEdit} /> : null
        }
    </>);
};

export default TaskList;