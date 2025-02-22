import Navbar from "./Nabar";
import SideBar from "./SideBar";


const AdminLayout = ({ children }) => {
    return (
    <div className="flex flex-col h-screen">
     <Navbar/>
      <div className="flex flex-row h-[calc(100vh-5rem)]">
       <SideBar/>
        <main className="w-full overflow-y-auto">
        {children}
        </main>
      </div>
    </div>
    );
  };
  
  export default AdminLayout;
  