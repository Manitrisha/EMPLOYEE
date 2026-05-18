import { useForm } from "react-hook-form";
import { useState,useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";


function CreateEmp() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await axios.post("http://localhost:4000/emp-api/employees", newEmpObj);

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.response?.data?.reason || err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl mt-10">Loading....</p>;
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-600 mt-10">Create New Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl mb-4 text-center">
            <strong>Error:</strong> {error}
          </div>
        )}
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;