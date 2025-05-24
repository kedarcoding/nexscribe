import Navbar from '../Navbar';
import ReduxProvider from "@/redux/provider";

const GuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-2 my-4 pt-16 p-4">
      <ReduxProvider>{children}</ReduxProvider>
      </main>
      <footer className="bg-blue-200 p-4">
        <div className='flex w-full justify-center'>
         © {new Date().getFullYear()} Kedar-G. All rights reserved.
         </div>
      </footer>
    </div>
  );
};

export default GuestLayout;
