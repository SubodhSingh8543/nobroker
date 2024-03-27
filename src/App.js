import logo from './logo.svg';
import './App.css';
import Timer from './Components/timer';
import Accordian from './Components/accordian';
import CheckboxGrp from './Components/checkboxs';

function App() {
  return (
    <div className="App">
      <h2>Timer</h2>
      <Timer />
      <h2>Accordian</h2>
      <Accordian />
      <h2>Check boxes</h2>
      <CheckboxGrp/>
    </div>
  );
}

export default App;
