import React, { useEffect, useRef } from "react";
import "./assets/css/modal.css";

function Modal({ photo, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        const handleClose = (event) => {
            // Verifica se o clique foi fora do modal
            if (event.target === dialog) {
                onClose();
            }
        };

        // Adiciona um evento de clique ao elemento de fundo do modal
        dialog.addEventListener('click', handleClose);

        return () => {
            // Remove o evento ao desmontar o componente para evitar vazamentos de memória
            dialog.removeEventListener('click', handleClose);
        };
    }, [onClose]);

    useEffect(() => {
        // Se uma nova foto for passada como prop, abre o modal novamente
        const dialog = dialogRef.current;
        if (photo) {
            dialog.showModal();
        }
    }, [photo]);

    return (
        <dialog ref={dialogRef} className="dialog-modal">
            <span className="close" onClick={onClose}>
                &times;
            </span>
            {photo && (
                <>
                    <img
                        src={photo.img_src}
                        id="img-rover"
                        alt={`Rover ${photo.rover.name} - ${photo.camera.full_name}`}
                    />
                    <div className="modal-info">
                        <h3>Informações da Foto</h3>
                        <p>Câmera: {photo.camera.full_name}</p>
                        <p>Data: {photo.earth_date}</p>
                        <p>Rover Status: {photo.rover.status}</p>
                        {/* Adicione mais informações conforme necessário */}
                    </div>
                </>
            )}
        </dialog>
    );
}

export default Modal;
