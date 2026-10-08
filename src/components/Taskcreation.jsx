import "../styles/task.css"
import { useState } from "react";
import InitialTaskList from "./Tasklist";


function AddTask(props) {
    //Destructuring
    const { alltasks, OnSubmit } = props;
    const [textvalues, setTextValues] = useState({ "ID": "", "Task Title": "", "Description": "", "Priority": "", "Status": "" });
    const [duplicateError, setDuplicateError] = useState(false);

    //Practiced   use Effect
    // const [errors, setErrors] = useState({
    //     tasktitle: false,
    //     description: false,
    //     priority: false,
    //     status: false
    // });

    // useEffect(() => {
    //     const newErrors = {
    //         tasktitle: textvalues.tasktitle.trim() === "",
    //         description: textvalues.description.trim() === "",
    //         priority: textvalues.priority.trim() === "",
    //         status: textvalues.status.trim() === ""
    //     }
    //     setErrors(newErrors);
    // },[textvalues])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTextValues({ ...textvalues, [name]: value })
    }
    const errors = {
        tasktitle: textvalues["Task Title"].trim() === "",
        description: textvalues["Description"].trim() === "",
        priority: textvalues["Priority"].trim() === ""
    }
    let existingTask;
    const handleSubmit = (event) => {
        event.preventDefault();

        if (errors.tasktitle || errors.description || errors.priority) {
            return;
        }
        existingTask = textvalues["Task Title"].trim() !== "" && alltasks.find((task) => task["Task Title"].trim().toLowerCase() === textvalues["Task Title"].trim().toLowerCase());

        if (existingTask) {
            setDuplicateError(true);
            return;
        }

        const getIDs = alltasks.map((task) => task.ID)//alltasks.length + 1;
        const getMax = Math.max(...getIDs) + 1;
        const newTask = { "ID": getMax, "Task Title": textvalues["Task Title"], "Description": textvalues["Description"], "Priority": textvalues["Priority"], "Status": "Pending" };

        //const newkeys = Object.keys(newTask);
        // const newvalues = Object.values(newTask);
        OnSubmit(alltasks => [...alltasks, newTask]);
        setTextValues({
            "ID": "",
            "Task Title": "",
            "Description": "",
            "Priority": ""
        });
        setDuplicateError(false);
    }
    return (
        <aside className="addTask">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>

                <label className="form-label"  >Task Title
                    <div className="input-row">
                        <input name="Task Title" type="text" placeholder="Task Title" className="form-text" value={textvalues["Task Title"]} onChange={handleChange}></input>
                        {errors.tasktitle && (
                            <span className="error">*</span>
                        )}
                        {duplicateError && (
                            <span className="error">
                                Task title already exists
                            </span>
                        )}
                    </div>
                </label>
                <label className="form-label" >Description
                    <div className="input-row">
                        <input name="Description" type="text" placeholder="Description" className="form-text" value={textvalues["Description"]} onChange={handleChange}></input>
                        {errors.description && (
                            <span className="error">*</span>
                        )}
                    </div>
                </label>
                <label className="form-label" >Priority
                    <div className="input-row">
                        <input name="Priority" value={textvalues["Priority"]} type="text" placeholder="Priority" onChange={handleChange} className="form-text"></input >
                        {errors.priority && (
                            <span className="error">*</span>
                        )}
                    </div>
                </label>
                {/* <label className="form-label">Status    {errors.status  && (
                        <span className="error">*</span>
                    )}
                    <input name="status" type="text" value={textvalues.status} placeholder="Status" onChange={handleChange} className="form-text"></input>
                </label> */}
                <button type="submit" className="form-button">
                    Submit
                </button>
            </form>
        </aside>
    );
}
export default AddTask