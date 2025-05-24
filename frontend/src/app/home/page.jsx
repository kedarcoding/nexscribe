// pages/index.js
import HomePage from '../components/Home/HomePage';
import GuestLayout from '../components/layouts/GuestLayout';

const Home = () => {
  return (
    <GuestLayout>
     <HomePage/>
    </GuestLayout>
  );
};

export default Home;
