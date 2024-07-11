/** @format */
'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '@/app/components/Toast/page';

const ToastContext = createContext();

const Page = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    setToasts((prevToasts) => [...prevToasts, { message, type }]);
  }, []);

  const removeToast = useCallback((index) => {
    setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-4 z-50">
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            {...toast}
            removeToast={() => removeToast(index)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default Page;

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
