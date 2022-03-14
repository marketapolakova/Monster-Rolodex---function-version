import { useState, useEffect } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';


const App = () => {
const [searchField, setSearchField] = useState('');
const [monsters, setMonsters] = useState([]);

console.log(searchField);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>{setMonsters(users)})
}, [])

 const onSearchChange=(event)=>{
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
       }
       const filtredMonsters=monsters.filter((monster)=>{
              return monster.name.toLowerCase().includes(searchField)
            })
  return(
    <div className="App">
    <h1 className='app-title'>Monster Rolodex</h1>
    <SearchBox className='search-box-monsters'  placeholder="search monsters" onChangeHandler={onSearchChange}/>
    <CardList monsters={filtredMonsters}/> 
    </div>
  )
}


export default App;
