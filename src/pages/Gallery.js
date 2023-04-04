import { Textfit } from "react-textfit";
import { Wrapper, Container, ArtPiece } from "./Gallery.styles";
import Modal from "../components/Modal";

const Gallery = (props) => {
    return (
        <div className="Page">
            {props.modalIsOpen ? <Modal closeModal={props.handleClose} piece={props.currentPiece} hidden /> : null}
            <Wrapper onClick={props.modalIsOpen ? props.handleClose : null} blur={props.bgBlur}>
                {props.errorMsg && <h3>{props.errorMsg}</h3>}

                <Container>
                    {props.allArt.map((piece, index) => {
                        return (
                            <ArtPiece key={index} className="content-wrapper" onClick={() => props.handleShow(piece)}>
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

export default Gallery