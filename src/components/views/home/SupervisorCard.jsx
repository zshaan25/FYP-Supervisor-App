import React from 'react'

const SupervisorCard = ({ name, department, specialty}) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white text-center">
        <h3 className="text-lg font-bold text-indigo-700">{name}</h3>
        <p className="text-gray-600">{department}</p>
        <p className="text-sm text-gray-500 italic">{specialty}</p>
      </div>
    );
  }
export default SupervisorCard
