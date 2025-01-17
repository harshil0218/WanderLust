import React, { useState } from 'react';

function PhotoGallery({ photos }) {
  const [visiblePhotos, setVisiblePhotos] = useState(6);

  const showMorePhotos = () => {
    setVisiblePhotos((prev) => prev + 10);
  };
  const showLessPhotos = () => {
    setVisiblePhotos((prev) => Math.max(6, prev - 10)); // Ensure it doesn't go below the initial number
  };
  return (
    <div className="w-max-md mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {photos.slice(0, visiblePhotos).map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-72 object-cover rounded-xl"
          />
        ))}
      </div>
      {photos.length > visiblePhotos && (
        <button
          onClick={showMorePhotos}
          className="mt-4 w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none"
        >
          Show More Photos
        </button>
      )}
      {visiblePhotos > 6 && (
          <button
            onClick={showLessPhotos}
            className="mt-4 w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none"
          >
            Show Less Photos
          </button>
        )}
    </div>
  );
}

export default PhotoGallery;
