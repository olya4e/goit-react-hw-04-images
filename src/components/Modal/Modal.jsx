import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, url }) => {
    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose()
        }
        
    }
    const handleEscapeClick = (e) => {
        if (e.code === 'Escape') {
            onClose()
        }        
    }

    useEffect(() => {
        window.addEventListener('keydown', handleEscapeClick)
        return () => {
        window.removeEventListener('keydown', handleEscapeClick)    
        }
    }, [url])  
    
        return createPortal(
        <div className={css.Overlay} onClick={handleBackdropClick}>
            <div className={css.Modal}>
                <img src={url} alt="" />
            </div>
        </div>, modalRoot
    )
    
    
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}