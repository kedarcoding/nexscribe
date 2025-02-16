import InsightComponent from '../components/Insights/InsightComponent';
// import BlogComponent from '../components/BlogComponent';
import GuestLayout from '../components/layouts/GuestLayout';
import ProtectedRoute from '../components/ProtectedRoute';


export default function Profile() {
    return (
      <ProtectedRoute>
      <GuestLayout>
        <div>
          <h1 className="text-3xl font-bold">Insightssss</h1>
          <InsightComponent/>
        </div>
      </GuestLayout>
      </ProtectedRoute>
    );
  }