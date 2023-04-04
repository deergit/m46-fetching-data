import { Textfit } from "react-textfit";
import { Wrapper, Container, ArtPiece } from "../App.styles";
import Modal from "../components/Modal";

const Gallery = (props) => {
    return (
        <Wrapper onClick={props.modalIsOpen ? props.handleClose : null} blur={props.bgBlur}>
            {props.modalIsOpen ? <Modal closeModal={props.handleClose} piece={props.currentPiece} hidden /> : null}
            <h1>Art Institute of Chicago</h1>
            <h4>and their lovely api</h4>
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
    )
}

export default Gallery