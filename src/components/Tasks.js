import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default Tasks;

/**
 * NB: When Destructing we use curly Braces
 * But when using useState which use block Braces..
 */
