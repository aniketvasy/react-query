import logo from './logo.svg';
import './App.css';
import Users from './Users';
import UserDetail from './UserDetail';
import { useState } from 'react';

function App() {
  const [userId,setUserId] = useState(0)
  return (
    <div className="App">
  
    <Users setUserId={setUserId} />
    <UserDetail userId={userId}/>
    </div>
  );
}

export default App;
