// src/app/blog/page.jsx
import BlogComponent from '../components/BlogComponent';
import GuestLayout from '../components/layouts/GuestLayout';

export default function BlogPage() {
  return (
    <GuestLayout>
    <div>
      <BlogComponent />
    </div>
    </GuestLayout>
  );
}
