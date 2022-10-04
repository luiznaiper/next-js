import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };

    fetching();
  }, []);

  return products;
};

export default useGetProducts;
