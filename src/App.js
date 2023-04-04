import { useState, useEffect } from "react";
import { Textfit } from "react-textfit";
import { Wrapper, Container, ArtPiece } from "./App.styles";
import Modal from "./Modal";
import "./App.css";

function App() {
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
                console.log(data.data);
            } catch(err) {
                setErrorMsg("ERROR: unable to retrieve data from artic API");
                console.log(err.message);
            }
        }
        fetchData();
    }, [])


    return (
        <div className="App">
            {modalIsOpen ? <Modal closeModal={handleClose} piece={currentPiece} hidden /> : null}
            <Wrapper onClick={modalIsOpen ? handleClose : null} blur={bgBlur}>
                <h1>Art Institute of Chicago</h1>
                <h4>and their lovely api</h4>
                {errorMsg && <h3>{errorMsg}</h3>}

                <Container>
                    {allArt.map((piece, index) => {
                        return (
                            <ArtPiece key={index} className="content-wrapper" onClick={() => handleShow(piece)}>
                                <img src={`https://www.artic.edu/iiif/2/${piece.image_id}/full/843,/0/default.jpg`} alt={`${piece.title} by ${piece.artist_title} in ${piece.medium_display}`} draggable="false"></img>
                                <div className="info">
                                    <h2>{piece.title}</h2>
                                    <Textfit mode="multi" min={10} max={70}>{piece.artist_title}, {piece.medium_display}</Textfit>
                                </div>
                            </ArtPiece>
                        );
                    })}
                </Container>
            </Wrapper>
        </div>
    );
}

export default App;
