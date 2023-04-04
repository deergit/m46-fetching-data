import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import "./App.css";

const App = () => {
    const [allArt, setAllArt] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [currentPiece, setCurrentPiece] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [bgBlur, setBGBlur] = useState(0);

    const handleShow = (piece) => {
        setCurrentPiece(piece);
        setIsOpen(true);
        setBGBlur(10);
    }

    const handleClose = () => {
        setIsOpen(false);
        setBGBlur(0);
    }

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
        <BrowserRouter>
            <nav>
                <h1>Art Institute of Chicago API</h1>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
            </nav>

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/gallery" element={ <Gallery allArt={allArt} modalIsOpen={modalIsOpen} handleShow={handleShow} handleClose={handleClose} currentPiece={currentPiece} bgBlur={bgBlur} errorMsg={errorMsg} /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
