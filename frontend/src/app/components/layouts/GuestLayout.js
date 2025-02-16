import Navbar from '../Navbar';

const GuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-2 my-4 pt-16 p-4">
        {children}
      </main>
      <footer className="bg-blue-200 p-4">
        Guest Footer
      </footer>
    </div>
  );
};

export default GuestLayout;
