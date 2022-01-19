/**
 * @Purpose Main component of the webapp
 * @Contains - routing, config imports and more later
 */
import './App.css';

// Components testing imports
import PersonalInfo from './Components/Personal_data_monitoring/PersonalInfo';
import HealthStats from './Components/Personal_data_monitoring/HealthStats';

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
        </div>

        {/* Router */}

        {/* Components testing without login */}
        <div className='left'>
        <PersonalInfo user={testConfigs.user1}/>
        <HealthStats stats={testConfigs.healthStats1}/>
        </div>
    </div>
  );
}

export default App;
