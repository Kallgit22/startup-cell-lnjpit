import './App.css';
import UserDataProvider from './context/UserDataProvider';
import Header from './ui/components/Header';
import Dashboard from './ui/pages/Dashboard';

function App() {
  return (
    <UserDataProvider>
      <Dashboard/>
    </UserDataProvider>
  );
}

export default App;
