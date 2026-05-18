import { useLocation, Link } from "react-router";

function Employee() {
  // read state received in navigation
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="p-16 text-center text-3xl text-red-500 bg-white rounded-3xl shadow-xl max-w-xl mx-auto mt-10">
        <p className="font-semibold mb-4">No Employee Data Found</p>
        <p className="text-lg text-gray-500 mb-6">It looks like the page was refreshed or accessed directly.</p>
        <Link to="/list" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl px-6 py-3 rounded-2xl transition duration-300">
          Go to Employee List
        </Link>
      </div>
    );
  }

  return (
    <div className="p-16 text-center text-3xl bg-white rounded-3xl shadow-xl max-w-xl mx-auto mt-10">
      <h2 className="text-4xl font-bold text-gray-700 mb-8 border-b pb-4">Employee Details</h2>
      <div className="space-y-4 text-left text-2xl max-w-md mx-auto">
        <p><strong className="text-gray-500">Name:</strong> {state.name}</p>
        <p><strong className="text-gray-500">Email:</strong> {state.email}</p>
        <p><strong className="text-gray-500">Mobile:</strong> {state.mobile || "N/A"}</p>
        <p><strong className="text-gray-500">Designation:</strong> {state.designation}</p>
        <p><strong className="text-gray-500">Company:</strong> {state.companyName}</p>
      </div>
      <Link to="/list" className="inline-block mt-8 bg-gray-600 hover:bg-gray-700 text-white text-xl px-6 py-3 rounded-2xl transition duration-300">
        Back to List
      </Link>
    </div>
  );
}

export default Employee;