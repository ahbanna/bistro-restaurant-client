import React from "react";
import useTitle from "../../../hooks/useTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  useTitle("My cart");
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce(
    (preValue, currentValue) => currentValue.price + preValue,
    0
  );
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between py-4">
        <h2 className="text-2xl">Total Items: {cart.length}</h2>
        <h2 className="text-2xl">Total Price: ${total.toFixed(2)}</h2>
        <button className="btn btn-warning btn-sm">Pay</button>
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      class="btn btn-ghost bg-red-500"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
