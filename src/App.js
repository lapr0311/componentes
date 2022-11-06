
import './App.css';
import Button from './Button';
import Input from './Input';
import {useState} from 'react';

function App() {
  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")
  return (
   <div>
 <Input nombre={nombre} setNombre={setNombre} password={password} setPassword={setPassword}/>
 <br></br>
  {password == "252525" && <Button />}
 </div>
  );


}

export default App;
