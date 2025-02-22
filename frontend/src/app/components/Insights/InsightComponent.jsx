// src/app/blog/components/BlogComponent.jsx
"use client";

import { useEffect, useState } from "react";
import { get } from '@/services/api';
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setPage, setSearchQuery } from "@/redux/features/dataSlice";
import Head from "next/head";

export default function BlogComponent() {

  const [insights, setInsight] = useState({'name':'kedar','name:':'Neha'});
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { items, loading, currentPage, totalPages, searchQuery } = useSelector(
    (state) => state.data
  );
  useEffect(() => {
    const fetchInsight = async () => {
      try {
        dispatch(fetchData({ page: currentPage, search: searchQuery }));
  
        // const data = await get('/insights');
        // console.log('Data fetched:', data);
        // setInsight(data.data);
      } catch (err) {
        // console.error('Error fetching data:', err);
        // setError('Failed to fetch data. Please try again later.');
      } finally {
        // setLoading(false);
      }
    };
  
    fetchInsight();
  }, [dispatch, currentPage, searchQuery]);
  

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }

  return (
   <div><Head><title>Nexscribe | Insights</title></Head>
   <div className="bg-white p-6 rounded shadow">
    
      <h2 className="text-xl font-bold mb-2">Insights</h2>
      
      <div className="grid grid-cols-3 gap-8">
          {(items?.length > 0)&& !loading ? (
            items.map((article) => (
              <div key={article.id} className="border cursor-pointer transition-transform duration-300 hover:shadow-md hover:scale-105 border-green-300 rounded-lg p-2">
                <dd className="text-lg font-semibold text-gray-700">{article.title}</dd>
                <p>{article.content}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No insights available</p>
          )}
      </div>
      {!loading && (
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(setPage(currentPage - 1))}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => dispatch(setPage(currentPage + 1))}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>)}
  </div>
  </div>
  );
}
