import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/routes';
import { RouterProvider } from 'react-router';
import Context from './context/Context';
import { ToastContainer } from 'react-toastify';





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={true}
        style={{ width: "5000px" }}
      />
    </Context>
  </StrictMode>,
);
