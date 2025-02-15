// pages/index.js
import GuestLayout from '../components/layouts/GuestLayout';

const Home = () => {
  return (
    <GuestLayout>
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the content of the home page.</p>
    </GuestLayout>
  );
};

export default Home;
