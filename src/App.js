/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
import './App.css';

// Components testing imports
import PageContainer from './Components/Personal_data_monitoring/PageContainer';
import PageContainerOperator from './Components/Operator_control_pannel/PageContainerOperator'
import Register from './Components/User_management/register_patient/Register';
import AdminView from './Components/Admin_views/AdminView';
const logo = require('./assets/logo.png')

// Modules import

// Components import


function App() {

  // Test unit data generating import
  const testConfigs = require('./configs/tests.json')

  // Return main app component 
  return (
    <div className="App">
        
        {/* Top bar component */}
        <div className='top-bar'>
          {/* Logo + Title + Menu */}
            <img src={logo} className='logo'/>
        </div>

        {/* Router */}
        {/* NOTICE: currentDevice should be written only in lower case format. */}
       {/*<PageContainer 
          userInfo={testConfigs.user1}
          healthStats={testConfigs.healthStats1}
          currentDevice={"wheelchair"} 
       />*/}
       {/* <PageContainerOperator/>*/}
       <AdminView adminInfo={testConfigs.admin1}/>
    </div>
  )
}

export default App;
