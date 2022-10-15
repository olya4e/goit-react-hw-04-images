import { useState, useEffect } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery'
import { LoadMoreBtn } from './Button/Button'
import {Loader} from './Loader/Loader'
import { getImageFromApi } from '../api/api'

export const App = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    addImage(page, searchQuery)
  }, [page, searchQuery])
  

  const addImage = async (page, searchQuery) => {
    try {
      if(!searchQuery){
        return
      }
      setIsLoading(true)
      const images = await getImageFromApi(page, searchQuery)
      
      setItems(prev => [...prev, ...images])
      setIsLoading(false)
      
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
    
  }

 const handleSearchbarSumbit = (searchQuery) => {
    if (searchQuery.trim() === '') {
      alert('Please, enter your request')
      return
    }
   setItems([])
   setPage(1)
   setSearchQuery(searchQuery)
 
 }
  
  const onLoadMoreButton = () => {
    setPage(prev=>prev+1)
  }

  return (
      <div>
        <SearchBar onSubmit={handleSearchbarSumbit} />
        <ImageGallery items={items} />
        {isLoading && <Loader />}
        {items.length > 0 && (<LoadMoreBtn onClick={onLoadMoreButton} />)}
      </div>
    )
}

