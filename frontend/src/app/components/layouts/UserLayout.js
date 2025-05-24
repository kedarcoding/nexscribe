const UserLayout = ({ children }) => {
    return (
      <div>
        <header>User Header</header>
        <main>{children}</main>
        <footer>
        <div className='flex w-full justify-center'>
         © {new Date().getFullYear()} Kedar-G. All rights reserved.
         </div>
        </footer>
      </div>
    );
  };
  
  export default UserLayout;
  