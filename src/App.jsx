import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import HeaderArea from './components/Headerarea'
import Summary from './components/TaskStatistics'
import AddTask from './components/Taskcreation'
import AddTaskListstoTable from './components/Tasklist'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState(
    [{
      "ID": 1,
      "Task Title": "Fix login",
      "Description": "Fix login issue",
      "Priority": "High",
      "Status": "Pending"
    },
    {
      "ID": 2,
      "Task Title": "Map Page",
      "Description": "Fix zoom issue",
      "Priority": "High",
      "Status": "Pending"
    },
    {
      "ID": 3,
      "Task Title": "Dashboard Design",
      "Description": "Update dashboard layout",
      "Priority": "Medium",
      "Status": "Completed"
    },
    {
      "ID": 4,
      "Task Title": "Database Backup",
      "Description": "Take the latest database backup",
      "Priority": "Low",
      "Status": "Pending"
    },
    {
      "ID": 5,
      "Task Title": "User Testing",
      "Description": "Perform testing with sample users",
      "Priority": "Medium",
      "Status": "In Progress"
    }]
  )


  return (
    <>
    <h1>Hello   Git - Developer A</h1>
    <p>Developer AB is working on the project.</p>
    <p>Developer AB</p>
      <div className='dashboard'>
        <HeaderArea />
        <Summary allTasks={tasks} />
        <main className='dashboard-main'>
          <AddTaskListstoTable allTasks={tasks} ChangeStatus={setTasks} />
          <AddTask alltasks={tasks} OnSubmit={setTasks} />
        </main>
      </div>
    </>
  )
}

export default App
