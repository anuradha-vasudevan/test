
function Summary({ allTasks }) {
    const totalCount = allTasks.length;
    const pending = allTasks.filter((task) => task.Status === "Pending").length
    const inProgressCount = allTasks.filter(task => task.Status === "In Progress").length;
    const completedCount = allTasks.filter(task => task.Status === "Completed").length; 
    return (
        <section className="summary">
            <div className="summary-card total-card">
                <h3>Total Tasks </h3>
                <p  >{totalCount}</p>
            </div>
            <div className="summary-card pending-card">
                <h3>Pending </h3>
                <p>{pending}</p>
            </div>
            <div className="summary-card progress-card">
                <h3>In Progress </h3>
                <p>{inProgressCount}</p>
            </div>
            <div className="summary-card completed-card">
                <h3>Completed </h3>
                <p>{completedCount}</p>
            </div>
        </section>
    );
}

export default Summary