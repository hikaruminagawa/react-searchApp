import React, { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const inputText = useRef()
  
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=> {return res.json()})
      .then((data)=> setUsers(data))
  },[])

    const handleSearch = () => {
      //フィルタリング機能を追加
      setSearchQuery(
        users.filter((user) => user.name.toLowerCase().includes(inputText.current.value))
        )
    }

  // console.log(users);

  return (
    <div className="App">
      <div className="main" >
        <h2>検索アプリ</h2>
        <input type="text" ref={inputText} onChange={()=> handleSearch()} />
        <div className="content">
          {searchQuery.map((user)=>(
            <div className="box" key={user.id}>
              <h3>{user.name}</h3>
              <hr/>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
