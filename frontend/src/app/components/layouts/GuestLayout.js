import Navbar from '../Navbar';

const GuestLayout = ({ children }) => {
    return (
      <div>
        <Navbar>Menu</Navbar>
        <div className='min-h-screen'>
        <main className='mx-2 my-1 pt-16 p-4'>{children}</main>
        </div>
        <footer className='fixed bottom-0 w-full z-50 bg-blue-200 p-20'>Guest Footer</footer>
      </div>  
    );
  };
  
  export default GuestLayout;
  