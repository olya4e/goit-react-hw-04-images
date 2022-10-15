import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'

export const ImageGallery = ({ items }) => {
    return (
        <ul className={css.ImageGallery}>
            {items.map((item)=>
            {
                
                return <ImageGalleryItem key={item.id} item={item}  />
            }
                )}
        </ul>
    )
}
ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}