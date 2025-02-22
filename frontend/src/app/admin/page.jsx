import Link from "next/link";

export default function AdminPage() {
  const sideMenu = [
    { 'name': 'Dashboard', 'url': '/profile' },
    { 'name': 'Insights', 'url': '/insights' },
    { 'name': 'Users', 'url': '/home' },
    { 'name': 'Settings', 'url': '/home' }
  ];

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-200 h-20 shrink-0 shadow-md">
       
      </header>
      <div className="flex flex-row h-[calc(100vh-5rem)]">
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
        <main className="w-full overflow-y-auto">
        <h1 className="text-white text-3xl mb-6">Main Content</h1>
          <div className="text-blue-200 mx-2">
            <p>
              This is some dummy content for testing the layout. You can replace this with your actual content later.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nulla eu auctor tincidunt, orci libero mollis eros, id fringilla lorem tortor nec nunc. Integer ac mi erat. Nunc interdum urna ac purus sollicitudin malesuada. Curabitur aliquet, dui nec tempor venenatis, nisi augue mollis lorem, ac volutpat risus leo ac erat.
            </p>
            <p>
              Proin suscipit risus id leo volutpat, sit amet posuere lorem pharetra. Vivamus porttitor purus ut nisi fermentum, eget posuere tortor varius. Nam et eros at elit ullamcorper dapibus. Aenean vestibulum dolor eget justo iaculis, vel convallis leo auctor. Donec dignissim augue vel justo luctus, vel venenatis leo malesuada.
            </p>
            <p>
              Phasellus malesuada nulla ut mauris tincidunt, et fermentum purus ultricies. Ut auctor nec enim vitae sollicitudin. Integer ultricies, nulla a fermentum condimentum, dui nulla tristique ante, vel tincidunt elit elit ac risus.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
