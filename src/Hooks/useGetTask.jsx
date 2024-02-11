import { useEffect, useState } from "react";

const useGetTask = () => {
    const [taskData, setTaskData] = useState([]);
    const task = JSON.parse(localStorage.getItem('taskData')) || [];

    useEffect(() => {
        setTaskData(task);
    }, []);

    return [taskData];
};

export default useGetTask;