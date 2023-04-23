import './App.css';
import UIAppbar from './components/Appbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App" style={{ height: "100vh", backgroundColor: "#ededed" }}>
      <UIAppbar />
      <Dashboard />
    </div>
  );
}

export default App;
