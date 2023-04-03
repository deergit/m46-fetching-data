import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://legacy--api.herokuapp.com/api/v1/characters");
            const data = await response.json();
            console.log(data);
        }
        fetchData();
    }, [])

    return (
        <div className="App">
            <h1>Fetching Data</h1>
        </div>
    );
}

export default App;
