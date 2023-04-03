import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [allArt, setAllArt] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.artic.edu/api/v1/artworks");
                
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setAllArt(data.data);
            } catch(err) {
                setErrorMsg("ERROR: unable to retrieve data from artic API");
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="App">
            <h1>Art Institute of Chicago</h1>
            <h4>and their lovely api</h4>
            {errorMsg && <h3>{errorMsg}</h3>}
            <div id="container">
                {allArt.map((piece, index) => {
                    return (
                        <div key={index} className="content-wrapper">
                            <img src={`https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`} alt={piece.thumbnail.alt_text} draggable="false"></img>
                            <div className="info">
                                <h2>{piece.title}</h2>
                                <h3>{piece.artist_title}, {piece.medium_display}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
