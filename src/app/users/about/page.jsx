/** @format */
'use client';
import { useToast } from '@/app/contexts/ToastContext/page';
const Page = () => {
  const { addToast } = useToast();

  const showSuccessToast = () => {
    addToast('This is a success message!', 'success');
  };

  const showErrorToast = () => {
    addToast('This is an error message!', 'error');
  };

  const showWarningToast = () => {
    addToast('This is a warning message!', 'warning');
  };

  return (
    <div className="p-4">
      <button
        onClick={showSuccessToast}
        className="bg-green-500 text-white p-2 rounded mr-2"
      >
        Show Success Toast
      </button>
      <button
        onClick={showErrorToast}
        className="bg-red-500 text-white p-2 rounded mr-2"
      >
        Show Error Toast
      </button>
      <button
        onClick={showWarningToast}
        className="bg-yellow-500 text-white p-2 rounded"
      >
        Show Warning Toast
      </button>
    </div>
  );
};

export default Page;
