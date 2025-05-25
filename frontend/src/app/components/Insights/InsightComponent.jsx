// src/app/blog/components/InsightComponent.jsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setPage } from "@/redux/features/dataSlice";

const InsightComponent = () => {
  const dispatch = useDispatch();
  const { items, loading, error, currentPage, totalPages, searchQuery } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchData({ page: currentPage, search: searchQuery }));
  }, [dispatch, currentPage, searchQuery]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Insights</h2>

      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}

      {!loading && items.length === 0 && (
        <p className="text-gray-500">No insights available.</p>
      )}

      <div className="grid grid-cols-3 gap-8">
        {items.map((article) => (
          <div
            key={article.id}
            className="border cursor-pointer transition-transform duration-300 hover:shadow-md hover:scale-105 border-green-300 rounded-lg p-2"
          >
            <dd className="text-lg font-semibold text-gray-700">{article.title}</dd>
            <p>{article.content}</p>
            <dd className="text-gray-800 font-bold mt-2">
              Author:
              <span className="text-gray-600 font-bold mx-2">{article.user?.name}</span>
            </dd>
          </div>
        ))}
      </div>

      {!loading && totalPages > 1 && (
        <div className="flex justify-between mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => dispatch(setPage(currentPage - 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => dispatch(setPage(currentPage + 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default InsightComponent;
