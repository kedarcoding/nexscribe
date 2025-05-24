'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div className="pt-20"> {/* Adjust top padding as per your header height */}
      
      {/* Carousel Section */}
      <section className="relative z-0 bg-white py-6 shadow-md">
  <div className="max-w-6xl mx-auto px-4">
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div>
              <img src="/assets/home/slider-1.jpg" alt="Slide 1" className="rounded-xl object-cover" />
              <p className="legend">Welcome to My Project</p>
            </div>
            <div>
              <img src="/assets/home/slider-2.jpg" alt="Slide 2" className="rounded-xl object-cover" />
              <p className="legend">Learn, Build, Grow</p>
            </div>
            <div>
              <img src="/assets/home/slider-3.jpg" alt="Slide 3" className="rounded-xl object-cover" />
              <p className="legend">Practice Makes Perfect</p>
            </div>
          </Carousel>

        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Fast Performance', 'Responsive Design', 'Clean Code'].map((title, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">
                  This is a placeholder for the description of {title.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            This is a self-practice project built to sharpen frontend and backend skills.
            It includes modern web development features such as routing, reusable components, and more.
            Replace this with your real story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
