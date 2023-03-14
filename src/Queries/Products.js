import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = (page, limit) => {
  return useQuery({
    queryKey: ['getAllProducts', page],
    queryFn: () => axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`).then(res => res.data),

  })
}


export { useProducts };