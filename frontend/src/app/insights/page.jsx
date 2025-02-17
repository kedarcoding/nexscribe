import InsightComponent from '../components/Insights/InsightComponent';
// import BlogComponent from '../components/BlogComponent';
import GuestLayout from '../components/layouts/GuestLayout';
import ProtectedRoute from '../components/ProtectedRoute';


export default function Profile() {
    return (
      <ProtectedRoute>
      <GuestLayout>
        <div>
          <InsightComponent/>
        </div>
      </GuestLayout>
      </ProtectedRoute>
    );
  }