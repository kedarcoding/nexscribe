import InsightComponent from '../components/Insights/InsightComponent';
// import BlogComponent from '../components/BlogComponent';
import GuestLayout from '../components/layouts/GuestLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import Profile from '../components/User/ProfilePage';
import Link from 'next/link';

export default function Insights() {
    return (
      <ProtectedRoute>
      <GuestLayout>
       <div className="flex w-full">
  {/* Left side: InsightComponent in 3/4 width */}
  <div className="w-3/4">
    <InsightComponent />
  </div>

  {/* Right side: Profile in remaining 1/4 width */}
  <div className="w-1/4 mt-4">
  <div>
    <Link href="/profile" className='button bg-gray-400 text-md font-medium py-1 px-2 text-white border-rounded rounded-md'>Edit Profle</Link></div>
    <Profile />
  </div>
</div>
      </GuestLayout>
      </ProtectedRoute>
    );
  }