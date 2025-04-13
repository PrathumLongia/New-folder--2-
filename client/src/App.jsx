import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
import { useContext } from 'react'
import AddJob from './pages/AddJob'
import ManageJobs from './pages/ManageJobs'
import Dashboard from './pages/Dashboard'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css'


function App() {
    const {showRecruiterLogin} = useContext(AppContext)

  return (
    <div className=" justify-center items-center h-screen bg-gray-100">
      { showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />} > 
          <Route path="add-job" element={<AddJob />} /> 
          <Route path="manage-job" element={<ManageJobs />} /> 
          <Route path="view-applications" element={<ViewApplications />} /> 
        </Route>
      </Routes>
    </div>
  )
}

export default App