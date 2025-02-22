


const Dashborad=()=>{
    const data = [
        { title: 'Users', count: 20, bgColor: 'bg-blue-500' },
        { title: 'Insights', count: 20, bgColor: 'bg-green-500' },
        { title: 'Settings', count: 15, bgColor: 'bg-red-500' },
        { title: 'Reports', count: 10, bgColor: 'bg-yellow-500' },
        { title: 'Messages', count: 5, bgColor: 'bg-purple-500' },
        { title: 'Notifications', count: 25, bgColor: 'bg-pink-500' },
        { title: 'Analytics', count: 18, bgColor: 'bg-teal-500' },
        { title: 'Sales', count: 30, bgColor: 'bg-indigo-500' },
        { title: 'Performance', count: 50, bgColor: 'bg-gray-500' }
      ];

    return (
        <div className="mx-5 my-6">
             <div className="grid grid-cols-3 gap-x-4 gap-y-10 justify-center">
                {data.map((item, index) => (
                <div  key={index} className="flex justify-center">
                <div className={`flex hover:scale-110 cursor-pointer transition-all transform duration-200ms items-center justify-center ${item.bgColor} w-[200px] h-[200px] rounded-full`}>
                    <div className="text-center text-white">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-xl">{item.count}</p>
                    </div>
                </div>
                </div>
                ))}
            </div>
        </div>
    )
}


export default Dashborad