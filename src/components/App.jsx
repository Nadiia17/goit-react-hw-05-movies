import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AppContainer } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { searchByQuery } from './api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const handleSubmit = newQuery => {
    const trimmedQuery = newQuery.trim();

    if (trimmedQuery === '') {
      toast.error('Please enter a search query!');
      return;
    }

    setQuery(trimmedQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Starting loading
        setLoading(true);
        setError(false);

        // API request
        const data = await searchByQuery(query, page);
        if (data.hits.length === 0) {
          toast.error('No images found for your query!');
          return;
        }
        // Updating state with data
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalHits(data.totalHits);
      } catch (error) {
        // Handling error
        console.error('Error fetching data: ', error);
        setError(true);
        toast.error('Error fetching images, please try again!');
      } finally {
        // Ending loading
        setLoading(false);
      }
    };
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  return (
    <AppContainer>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && images.length < totalHits && !loading && !error && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
      <Toaster position="top-right" />
    </AppContainer>
  );
};
