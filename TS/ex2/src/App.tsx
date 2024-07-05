import { Outlet, createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Header } from "./Header";
import { ContactPage } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="contact" />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />
  }
]);

export default function App() {
  return (
    <>
      {/* <Header />
      <Outlet /> */}
      <RouterProvider router={router} />
    </>
  )
}
