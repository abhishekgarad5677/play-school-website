import React, { useEffect } from "react";
import { useGetProfileMutation } from "../services/registrationApi";

const Profile = () => {
  const [
    registerOrLoginUser,
    { isLoading: apiLoading, error: apiError, data: apiData },
  ] = useGetProfileMutation();

  useEffect(() => {
    registerOrLoginUser({});
  }, [registerOrLoginUser]);

  if (apiLoading) return <div>Loading...</div>;
  if (apiError) return <div>Error loading profile!</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
      <div className="mb-6">
        <h2 className="text-xl font-medium">User Information</h2>
        <p className="text-lg text-gray-700">Name: {apiData?.data?.name}</p>
        <p className="text-lg text-gray-700">
          Phone Number: {apiData?.data?.phoneNumber}
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h2 className="text-xl font-medium mb-4">Student Details</h2>
        {apiData?.data?.students?.map((student, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-600">Gender: {student.gender}</p>
            <p className="text-gray-600">Rank: {student.rank}</p>
            <p className="text-gray-600">
              Average Score: {student.averageScore}
            </p>
            <p className="text-gray-600">Report Views: {student.reportViews}</p>
            <p className="text-gray-600">Plan: {student.plan}</p>
            <p
              className={`text-gray-600 ${student.isActive ? "text-green-500" : "text-red-500"}`}
            >
              Status: {student.isActive ? "Active" : "Inactive"}
            </p>
            {student.planExpiry && (
              <p className="text-gray-600">
                Plan Expiry: {new Date(student.planExpiry).toLocaleDateString()}
              </p>
            )}
            <p className="text-gray-600">
              Date of Birth:{" "}
              {new Date(student.dateOfBirth).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
