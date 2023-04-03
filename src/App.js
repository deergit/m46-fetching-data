import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./App.css";

function App() {
    const [allArt, setAllArt] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

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
                        <div key={index} className="content-wrapper" onClick={openModal}>
                            <img src={`https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`} alt={piece.thumbnail.alt_text} draggable="false"></img>
                            <div className="info">
                                <h2>{piece.title}</h2>
                                <h3>{piece.artist_title}, {piece.medium_display}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Modal show={modalIsOpen} onHide={closeModal}>

            </Modal>
        </div>
    );
}

export default App;
