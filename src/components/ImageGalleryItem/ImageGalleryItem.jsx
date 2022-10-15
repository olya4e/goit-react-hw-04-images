import { useState } from 'react';
import { Modal } from '../Modal/Modal'
import PropTypes from 'prop-types'
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ item:{ webformatURL, tag, largeImageURL}}) => {
    const [urlImage, setUrlImage] = useState('')
   
    const onOpenModal = (url) => {
       setUrlImage(url)
    }

    const onCloseModal = () => {
    setUrlImage('')
    }
            
     return (
        <>
        <li className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItem_image} src={webformatURL} alt={tag} onClick={()=>onOpenModal(largeImageURL)} />
            </li>
            {urlImage && <Modal url={largeImageURL} onClose={onCloseModal} />}
        </>
    
    )
    
   
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    tag: PropTypes.string,
    largeImageURL: PropTypes.string,
}