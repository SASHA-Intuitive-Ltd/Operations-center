/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
import './App.css';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';

// Components testing imports
import PageContainer from './Components/Personal_data_monitoring/PageContainer';
import PageContainerOperator from './Components/Operator_control_pannel/PageContainerOperator'
import Login from './Components/User_management/register_patient/Login';
import AdminView from './Components/Admin_views/AdminView';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import MeetingsPageContainer from './Components/Admin_views/Meetings/MeetingsPageContainer';
// import Landing from './Components/User_management/Landing/Landing';
const logo = require('./assets/logo.png')

// Modules import

// Components import


function App() {

  // Test unit data generating import
  const testConfigs = require('./configs/tests.json')

  const [user, setUser] = useState(testConfigs.user1)
  const [operator, setOperator] = useState(testConfigs.admin1)

  useEffect(() => {
    fetch('http://localhost:5000/users/620628b839bd33ce78e3ed56').then((response) => response.json())
    .then((data) => {
      setUser(data)
    });
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/admins/620a324365bd8515cf1a7ba3').then((response) => response.json())
    .then((data) => {
      setOperator(data);
    })

    console.log(operator)
  }, [])

  // Return main app component 
  return (
    <div className="App">
        {/* Top bar component */}
        <div className='top-bar'>
          {/* Logo + Title + Menu */}
            <img src={logo} className='logo'/>
        </div>
       {/*<AdminView adminInfo={testConfigs.admin1} />*/}
       {/**<PageContainerOperator operatorInfo={operator}/>*/}
       <MeetingsPageContainer adminInfo={operator}/>
    </div>
  )
}

export default App;
