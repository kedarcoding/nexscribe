import Link from "next/link";

const SideBar=()=>{
    const sideMenu = [
        { 'name': 'Dashboard', 'url': '/profile' },
        { 'name': 'Insights', 'url': '/insights' },
        { 'name': 'Users', 'url': '/home' },
        { 'name': 'Settings', 'url': '/home' }
      ];

return (
<aside className="overflow-x-hidden text-center bg-gray-200 w-[120px] text-center transition-all duration-300 hover:w-[200px] shadow-lg">
<ul className="list-none p-4 flex-grow mx-auto h-[92%] overflow-y-auto">
  {sideMenu.map((item, index) => (
    <li key={index} className="mb-4">
      <Link href={item.url} className="text-blue-600 font-semibold hover:text-green-700">
        {item.name}
      </Link>
    </li>
  ))}
</ul>
{/* Button at the bottom */}
<div className="border-t-2 border-gray-400">
<button className="bg-blue-400 text-white mx-1 my-2 p-2 mb-4 rounded-md hover:bg-blue-600 ">
  Button
</button>
</div>
{/* <div className="border-t-2 border-gray-700 my-1 start-end">
      <button className="toggle">Switch</button>
</div> */}
</aside>
)
}

export default SideBar