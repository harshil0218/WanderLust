import React from "react";

function PostContent({ caption = "", images = [] }) {
  
  return (
    <>
      <div className="flex justify-center ">
        <article className="w-96 h-auto p-0 border-gray-300 bg-white dark:bg-gray-900 dark:text-gray-100">
          <div className="p-4">
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              {caption}
            </p>
          </div>

          {/* Image Section */}
          <div className="grid gap-1 ml-1 p-3 rounded-xl">
            {/* Single Image */}
            {images.length === 1 && (
              <img
                src={images[0]}
                alt="Post"
                className="w-full h-72 object-cover rounded-xl"
              />
            )}

            {/* Two Images */}
            {images.length === 2 && (
              <div className="grid grid-cols-1 gap-1">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Post ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                ))}
              </div>
            )}

            {/* Three Images */}
            {images.length === 3 && (
              <div className="grid grid-rows-2 grid-cols-2 gap-1">
                <img
                  src={images[0]}
                  alt="Post 1"
                  className="row-span-2 col-span-1 w-full h-full object-cover rounded-xl"
                />
                {images.slice(1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Post ${index + 2}`}
                    className="w-full h-36 object-cover rounded-xl"
                  />
                ))}
              </div>
            )}

            {/* Four Images */}
            {images.length === 4 && (
              <div className="grid grid-cols-2 gap-1">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Post ${index + 1}`}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ))}
              </div>
            )}

            {/* More than 5 Images */}
            {images.length > 4 && (
              <div className="grid grid-cols-2 gap-1">
                {images.slice(0, 3).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Post ${index }`}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ))}
                <div className="relative w-full h-32">
                  <img
                    src={images[3]}
                    alt="Post 5"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                    <p className="text-white font-bold text-lg">
                      +{images.length - 4} more
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}

export default PostContent;
