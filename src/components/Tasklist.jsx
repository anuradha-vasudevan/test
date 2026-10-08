import ShowIndividualtask from "./Individualtask";

function AddTaskListstoTable({allTasks, ChangeStatus}) {//props
   // const { allTasks, ChangeStatus } = props;
    let getfirst;

    if (allTasks.length === 0) {
        return <p>No tasks available.</p>;
    }

    getfirst = Object.keys(allTasks[0]);
    getfirst.push("Action");
    const task_keys = getfirst;
    
    //const task_values = Object.values(oldTasks);
    return (
        <section className="tablecontainer">
            <div className="section-header">
                <h2>Tasks</h2>
                <span>All Tasks</span>
            </div>
            <div className="task-list">
                <table>
                    <thead>
                        <tr>
                            {
                                getfirst.map((task, index) => (
                                    <th key={index}>{task}</th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <ShowIndividualtask allTasks={allTasks} ChangeStatus={ChangeStatus} />
                            // allTasks.map((task) => (
                            //     <tr key={task.ID}>
                            //         {
                            //             Object.keys(task).map((key) =>
                            //                 key !== "Status" ? <td key={key}>{task[key]}</td> :
                            //                     <td key={key}>
                            //                         <select value={task[key]} onChange={(event) => handleStatusChange(task.ID, event.target.value)} >
                            //                             <option value="Pending">
                            //                                 Pending
                            //                             </option>
                            //                             <option value="In Progress">
                            //                                 In Progress
                            //                             </option>
                            //                             <option value="Completed">
                            //                                 Completed
                            //                             </option>
                            //                         </select>
                            //                     </td>
                            //             )}
                            //         <td><button key={task.ID} onClick={() => handleDelete(task.ID)}>Delete</button></td>
                            //     </tr>
                            // ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default AddTaskListstoTable