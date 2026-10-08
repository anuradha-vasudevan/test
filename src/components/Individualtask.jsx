function ShowIndividualtask(props) {
    const { allTasks,ChangeStatus } = props;
   function handleStatusChange(id, newStatus) {
        ChangeStatus(prevTasks => prevTasks.map((task) =>
            task.ID === id ? { ...task, Status: newStatus } : task
        ))
    }
    function handleDelete(id) {
        ChangeStatus(prevTasks => prevTasks.filter((task) =>
            task.ID !== id
        ))
    }
    return (
        allTasks.map((task) => (
            <tr key={task.ID}>
                {
                    Object.keys(task).map((key) =>
                        key !== "Status" ? <td key={key}>{task[key]}</td> :
                            <td key={key}>
                                <select value={task[key]} onChange={(event) => handleStatusChange(task.ID, event.target.value)} >
                                    <option value="Pending">
                                        Pending
                                    </option>
                                    <option value="In Progress">
                                        In Progress
                                    </option>
                                    <option value="Completed">
                                        Completed
                                    </option>
                                </select>
                            </td>
                    )}
                <td><button key={task.ID} onClick={() => handleDelete(task.ID)}>Delete</button></td>
            </tr>
        ))
    );
}

export default ShowIndividualtask