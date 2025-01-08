import React from "react";

function Post() {
  const images = [
    "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.pexels.com/photos/29947080/pexels-photo-29947080/free-photo-of-tranquil-coastal-road-with-ocean-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  ];

  return (
    <>
      <div className="flex justify-center ">
        <article className="w-96 h-auto p-0 border-gray-300 bg-white dark:bg-gray-900 dark:text-gray-100">
          <div className="p-4">
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
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
          </div>
        </article>
      </div>
    </>
  );
}

export default Post;
