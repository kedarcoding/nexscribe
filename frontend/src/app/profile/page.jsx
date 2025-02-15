// pages/profile.js
import ProtectedRoute from '../components/ProtectedRoute';
import GuestLayout from '../components/layouts/GuestLayout';
import ProfilePage from    '../components/User/ProfilePage';

export default function Profile() {
  return (
    <ProtectedRoute>
    <GuestLayout>
      <div>
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <ProfilePage/>
      </div>
    </GuestLayout>
    </ProtectedRoute>
  );
}
