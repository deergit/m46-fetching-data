import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://legacy--api.herokuapp.com/api/v1/characters");
            const data = await response.json();
            setAllCharacters(data);
        }
        fetchData();
    }, [])

    return (
        <div className="App">
            <h1>Fetching Data</h1>
            {allCharacters.map((character, index) => {
                return <p key={index}>{character.name}</p>
            })}
        </div>
    );
}

export default App;
