import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, Link } from 'react-router'
import axios from 'axios'
import { API_URL } from "../config";

function EditEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  // get empobj from navigate hook
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setValue("name", state.name);
      setValue("email", state.email);
      setValue("mobile", state.mobile);
      setValue("designation", state.designation);
      setValue("companyName", state.companyName);
    }
  }, [state, setValue]);

  // modify the form
  const saveModifiedEmp = async (modifiedEmp) => {
    if (!state) return;
    try {
      const res = await axios.put(`${API_URL}/emp-api/employees/${state._id}`, modifiedEmp);
      if (res.status === 200) {
        // navigate list of users
        navigate("/list");
      }
    } catch (err) {
      console.error("Error editing employee:", err);
    }
  }

  if (!state) {
    return (
      <div className="p-16 text-center text-3xl text-red-500 bg-white rounded-3xl shadow-xl max-w-xl mx-auto mt-10">
        <p className="font-semibold mb-4">No Employee Selected</p>
        <p className="text-lg text-gray-500 mb-6">It looks like the page was refreshed or accessed directly.</p>
        <Link to="/list" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl px-6 py-3 rounded-2xl transition duration-300">
          Go to Employee List
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-green-800 font-bold mb-6">Edit Employee</h1>
      {/* form */}
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email"
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

        <div className="flex justify-between items-center max-w-xs mx-auto mt-6">
          <Link to="/list" className="text-2xl rounded-2xl bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 transition duration-300">
            Cancel
          </Link>
          <button type="submit" className="text-2xl rounded-2xl bg-green-600 hover:bg-green-700 text-white px-6 py-3 transition duration-300">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee;