import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting = import.meta.env.VITE_Image_Upload;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          console.log(imgURL);
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting}`;
  return (
    <div className="w-full">
      <div>
        <SectionTitle
          heading={"Add an item"}
          subHeading={"What's new"}
        ></SectionTitle>
      </div>
      <div className="form-container bg-[#f3f3f3] p-10 w-3/4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
          <div className="flex">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                className="select select-bordered"
                defaultValue="Select one"
                {...register("category", { required: true })}
              >
                <option disabled>Select one</option>
                <option>Pizza</option>
                <option>Salad</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
          </div>

          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-28"
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="w-1/3">
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("image", { required: true })}
            />
          </div>
          <div className="text-center my-4">
            <input
              className="btn btn-outline btn-secondary"
              type="submit"
              value="Add Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
