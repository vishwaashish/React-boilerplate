// components/pages/UnauthorizedPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Go back to the previous page in history
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
        <p className="text-lg mb-4">
          You do not have the required permissions to access this page.
        </p>
        <div className="flex items-center">
          {document.referrer && (
            <button
              onClick={handleGoBack}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go Back
            </button>
          )}
          <Link to="/login" className="ml-4 text-blue-500 hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
