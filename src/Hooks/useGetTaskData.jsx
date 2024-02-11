import { useEffect, useState } from "react";

const useGetTaskData = () => {
    const [taskData, setTaskData] = useState([]);
    const task = JSON.parse(localStorage.getItem('taskData')) || [];

    useEffect(() => {
        setTaskData(task);
    }, []);

    return [taskData];
};

export default useGetTaskData;