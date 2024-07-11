/** @format */
'use client';
import React from 'react';

const Toast = ({ message, type, removeToast }) => {
  const getBgColor = (type) => {
    switch (type) {
      case 'error':
        return 'from-red-400 via-red-500 to-red-600';
      case 'warning':
        return 'from-yellow-400 via-yellow-500 to-yellow-600';
      case 'success':
      default:
        return 'from-green-400 via-green-500 to-green-600';
    }
  };

  console.log('message --------->>>>>>>>>>>>>>>', message);
  console.log('message type --------->>>>>>>>>>>>>>>', type);
  console.log('message removeToast --------->>>>>>>>>>>>>>>', getBgColor(type));
  return (
    <div
      className={`max-w-sm w-full bg-gradient-to-r ${getBgColor(
        type,
      )} text-white p-4 rounded-lg shadow-lg fixed top-4 right-4 z-50 flex items-center space-x-4`}
    >
      <div className="flex-1">
        <p className="font-semibold text-lg">{message}</p>
      </div>
      <button
        className="bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full"
        onClick={removeToast}
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
