// src/app/blog/components/BlogComponent.jsx
"use client";

import { useEffect, useState } from "react";
import { get } from '@/services/api';

export default function BlogComponent() {
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const data = await get('/insights');
        console.log('Data fetched:', data);
        setInsight(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2">First Blog Post</h2>
      <p className="text-gray-700">
        {/* {insight ? insight.content : 'No content available.'} */}
      </p>
    </div>
  );
}
