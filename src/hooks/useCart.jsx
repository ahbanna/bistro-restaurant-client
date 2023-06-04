import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
  // const { user } = useContext(AuthContext);
  const { user, loading } = useAuth();
  // jwt starts
  // const token = localStorage.getItem("access-token");
  // jwt end
  // axios sarts
  const [axiosSecure] = useAxiosSecure();
  // axios end
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCart;
