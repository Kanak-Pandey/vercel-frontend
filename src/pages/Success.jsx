import { useLocation, useNavigate } from "react-router-dom";

export function TransferSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // Optional: Get passed data (if you navigated with state)
  const { amount, name } = location.state || {};

  return (
    <div className="h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-md text-center w-[90%] max-w-md">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h2 className="text-2xl font-semibold mb-2">Transfer Successful!</h2>
        {amount && name ? (
          <p className="text-gray-700 mb-4">
            ₹{amount} has been sent to <span className="font-bold">{name}</span>.
          </p>
        ) : (
          <p className="text-gray-700 mb-4">Your money has been transferred.</p>
        )}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}