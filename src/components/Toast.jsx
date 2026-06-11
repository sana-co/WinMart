import React from 'react';
import { X } from 'lucide-react';
import './Toast.css';

const Toast = ({ toasts }) => {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
