import { useRef } from "react";
import { ModalContainer } from "../pages/Gallery.styles";

const Modal = (props) => {
    const modalRef = useRef();

    const closeHandler = (e) => {
        props.closeModal();
    }

    return (
        <ModalContainer ref={modalRef} piece={props.piece}>
            <div id="topbar">
                <button onClick={closeHandler}>x</button>
            </div>
            <img src={`https://www.artic.edu/iiif/2/${props.piece.image_id}/full/843,/0/default.jpg`} alt={`${props.piece.title} by ${props.piece.artist_title} in ${props.piece.medium_display}`} draggable="false"></img>
            <h1>{props.piece.title}</h1>
            <h2>{props.piece.artist_display}</h2>
            <h3>{props.piece.medium_display}</h3>
        </ModalContainer>
    )
}

export default Modal;