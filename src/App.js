import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
    //using useState for state management..
    const [showAddTask, setShowAddTask] = useState(false);
//     const [tasks, setTasks] = useState([]);

//    // use useEffect to load the list of todo's on page load by passing in the fetchApi as a function
//     useEffect(() => {
//         const fetchTasks = async () => {
//             const response  = await fetch(`http://localhost:5000/tasks`)
//             const data = await response.json()
//             console.log(data)
//         }
//     }, []);

    // const fetchTasks = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/tasks`)
    //         const data = await response.json()
    //         console.log(data);
    //     } catch (e) {
    //         console.log('Error Consoled', e)
    //     }

    // }
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Appointment Day for Meeting",
            day: "Feb 25th 2021 at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Cooperative Meeting ",
            day: "Dec 25th 2021 at 2:30pm",
            reminder: false,
        },
        {
            id: 3,
            text: "React Trailer Reminder",
            day: "Jan 5th 2021 at 2:30pm",
            reminder: true,
        },
        {
            id: 4,
            text: "Appointment Day",
            day: "Feb 25th 2021 at 2:30pm",
            reminder: true,
        },
    ]);

    //Delete Task

    const deleteTask = (id) => {
        //Array filter Js function will take in a function and returns the result...
        //setTasks is the function that will render the whole component..more like a reloading within the DOM
        setTasks(tasks.filter((task) => task.id !== id)); // this will return another array of filtered objects..
        // console.log(`Delete ${id}`)
    };

    //Toggle Reminder
    const toggleReminder = (id) => {
        //if the id is identified, sets its reminder to true
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    //Add Task function receives the actual object we want to add ...( task, date)
    const addTask = (task) => {
        //we need to generate a unique id
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = {...task, id };  //{id, ...task} creating the object 
        setTasks([...tasks, newTask]); //add the new task to the existing list
    };

    return (
        <div className="container">
            <Header
                title="Tasks Tracker"
                onClickAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {/* this will only show this AddTask Component if and only if showAddtask is true only */}
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No tasks to show "
            )}
        </div>
    );
};

export default App;
