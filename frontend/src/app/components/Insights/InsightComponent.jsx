// src/app/blog/components/BlogComponent.jsx
"use client";

import { useEffect, useState } from "react";
import { get } from '@/services/api';

export default function BlogComponent() {
  const [insights, setInsight] = useState({'name':'kedar','name:':'Neha'});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const data = await get('/insights');
        console.log('Data fetched:', data);
        setInsight(data.data);
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
      <h2 className="text-xl font-bold mb-2">Insights</h2>
      <div className="grid grid-cols-3 gap-8">
          {insights?.length > 0 ? (
            insights.map((article) => (
              <div key={article.id} className="border cursor-pointer transition-transform duration-300 hover:shadow-md hover:scale-105 border-green-300 rounded-lg p-2">
                <dd className="text-lg font-semibold text-gray-700">{article.title}</dd>
                <p>{article.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No insights available</p>
          )}
      </div>
  </div>
  );
}
