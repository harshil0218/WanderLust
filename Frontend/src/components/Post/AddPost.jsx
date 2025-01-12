import { React, useState } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { FaMapMarkerAlt } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
function AddPost() {
  const [postContent, setPostContent] = useState("");
  const [media, setMedia] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [travelPreferences, setTravelPreferences] = useState([]);

  const travelOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "couple", label: "Couple" },
    { value: "family", label: "Family" },
  ];

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    setMedia((prevMedia) => [...prevMedia, ...files]);
  };

  const handleRemoveImage = (index) => {
    setMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
  };

  const loadPlaceOptions = async (inputValue) => {
    // Mock async function to load place suggestions (replace with actual API call for Google Maps Autocomplete)
    return [
      { value: "New York", label: "New York" },
      { value: "Los Angeles", label: "Los Angeles" },
      { value: "Chicago", label: "Chicago" },
    ].filter((place) =>
      place.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handlePost = () => {
    if (!postContent || !selectedPlace || !startDate || !endDate) {
      alert("Please fill out all mandatory fields.");
      return;
    }

    console.log({
      postContent,
      media,
      selectedPlace,
      startDate,
      endDate,
      selectedBudget,
      travelPreferences,
    });
  };

  // Custom styles for react-select
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: state.theme === "dark" ? "#1F2937" : "#FFFFFF",
      borderColor: state.isFocused
        ? "#3B82F6"
        : state.theme === "dark"
        ? "#374151"
        : "#D1D5DB",
      color: state.theme === "dark" ? "white" : "black",
      boxShadow: state.isFocused ? "0 0 0 2px #3B82F6" : null,
      "&:hover": {
        borderColor: "#3B82F6",
      },
    }),
    menu: (base, state) => ({
      ...base,
      backgroundColor: state.theme === "dark" ? "#1F2937" : "#FFFFFF",
      color: state.theme === "dark" ? "white" : "black",
    }),
    multiValue: (base, state) => ({
      ...base,
      backgroundColor: state.theme === "dark" ? "#3B82F6" : "#BFDBFE",
      color: "white",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white",
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: "white",
      "&:hover": {
        backgroundColor: state.theme === "dark" ? "#1E40AF" : "#93C5FD",
        color: "black",
      },
    }),
    placeholder: (base, state) => ({
      ...base,
      color: state.theme === "dark" ? "#9CA3AF" : "#6B7280",
    }),
    input: (base, state) => ({
      ...base,
      color: state.theme === "dark" ? "white" : "black",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#3B82F6"
        : state.isFocused
        ? state.theme === "dark"
          ? "#1E40AF"
          : "#BFDBFE"
        : state.theme === "dark"
        ? "#1F2937"
        : "#FFFFFF",
      color: "white",
      "&:hover": {
        backgroundColor: state.theme === "dark" ? "#1E40AF" : "#93C5FD",
      },
    }),
  };
  const highlightHashtags = (text) => {
    return text.split(/(#[a-zA-Z0-9_]+)/g).map((part, index) =>
      part.startsWith("#") ? (
        <span key={index} className="text-blue-500">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 p-4">
    //   <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-4xl md:w-2/5 lg:w-2/5 xl:w-2/5">
    //     <div className="flex space-x-4">
    //       {/* User Avatar */}
    //       <img
    //         src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    //         alt="User Avatar"
    //         className="w-12 h-12 rounded-full"
    //       />

    //       {/* Post Input */}
    //       <div className="w-full">
    //         <textarea
    //           placeholder="What's on your mind?"
    //           value={postContent}
    //           onChange={(e) => setPostContent(e.target.value)}
    //           className="w-full h-20 resize-none rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
    //         />
    //       </div>
    //     </div>

    //     {/* Place, Date, Budget, and Preferences */}
    //     <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //       <div className="mb-4">
    //         <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
    //           Place
    //         </label>
    //         <div className="flex items-center">
    //           <FaMapMarkerAlt className="text-gray-700 dark:text-gray-300 mr-2" />
    //           <select
    //             value={selectedPlace}
    //             onChange={(e) => setSelectedPlace(e.target.value)}
    //             className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    //           >
    //             <option value="" disabled>
    //               Select a place
    //             </option>
    //             <option value="new-york">New York</option>
    //             <option value="san-francisco">San Francisco</option>
    //             <option value="los-angeles">Los Angeles</option>
    //           </select>
    //         </div>
    //       </div>

    //       <div>
    //         <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
    //           Start Date
    //         </label>
    //         <input
    //           type="date"
    //           value={startDate}
    //           onChange={(e) => setStartDate(e.target.value)}
    //           className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
    //           End Date
    //         </label>
    //         <input
    //           type="date"
    //           value={endDate}
    //           onChange={(e) => setEndDate(e.target.value)}
    //           className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
    //           Budget
    //         </label>
    //         <select
    //           value={selectedBudget}
    //           onChange={(e) => setSelectedBudget(e.target.value)}
    //           className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    //         >
    //           <option value="">Select Budget</option>
    //           <option value="Low">Low</option>
    //           <option value="Medium">Medium</option>
    //           <option value="High">High</option>
    //         </select>
    //       </div>
    //     </div>

    //     {/* Travel Mate Preferences */}
    //     <div className="mt-4">
    //       <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
    //         Travel Mate Preferences
    //       </label>
    //       <select
    //         multiple
    //         value={travelPreferences}
    //         onChange={(e) => setTravelPreferences(Array.from(e.target.selectedOptions, (option) => option.value))}
    //         className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    //       >
    //         <option value="adventure">Adventure</option>
    //         <option value="relaxation">Relaxation</option>
    //         <option value="beach">Beach</option>
    //         <option value="city">City</option>
    //       </select>
    //     </div>

    //     {/* Action Buttons */}
    //     <div className="flex justify-between items-center mt-4">
    //       {/* Media Upload */}
    //       <label
    //         htmlFor="mediaUpload"
    //         className="flex items-center cursor-pointer text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-5 h-5 mr-1"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M15.172 7l-6.586 6.586a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828L8.343 3m4.95-2H16a2 2 0 012 2v3.172a2 2 0 01-.586 1.414l-6.586 6.586a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828L8.343 3M8.343 3H5a2 2 0 00-2 2v10a2 2 0 002 2h3.172m3.414 3.414a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-6.586-6.586a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l6.586 6.586z"
    //           />
    //         </svg>
    //         Add Media
    //       </label>
    //       <input
    //         id="mediaUpload"
    //         type="file"
    //         accept="image/*,video/*"
    //         className="hidden"
    //         multiple
    //         onChange={handleMediaUpload}
    //       />

    //       {/* Post Button */}
    //       <button
    //         onClick={handlePost}
    //         className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
    //       >
    //         Post
    //       </button>
    //     </div>

    //     {/* Uploaded Media Preview */}
    //     {media.length > 0 && (
    //       <div className="mt-4">
    //         <p className="text-sm text-gray-500 dark:text-gray-400">Preview:</p>
    //         <div className="grid grid-cols-2 md:grid-cols-4 gap-2 relative">
    //           {media.map((file, index) => (
    //             <div className="relative" key={index}>
    //               <img
    //                 src={URL.createObjectURL(file)}
    //                 alt={`Preview ${index}`}
    //                 className="w-full h-auto rounded-lg mt-2"
    //               />
    //               <button
    //                 onClick={() => handleRemoveImage(index)}
    //                 className="absolute top-2 right-0 bg-gray-500 text-gray-200  dark:text-gray-800 rounded-full p-0 text-sm focus:outline-none hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-300"
    //               >
    //                 <CloseIcon fontSize="small" />
    //               </button>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 p-1">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-4/5 max-w-4xl md:w-4/5 lg:w-3/5 xl:w-3/5">
        <div className="flex space-x-4">
          {/* User Avatar */}
          <img
            src="https://images.pexels.com/photos/27893231/pexels-photo-27893231/free-photo-of-a-woman-taking-a-picture-with-her-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />

          {/* Post Input */}
          <div className="w-full">
            <textarea
              placeholder="What's your next trip?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="w-full h-20 resize-none rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-0 p-0 w-full">
          {/* Place */}
          <div className="mb-4 w-full sm:w-full md:w-1/4">
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Place
            </label>
            <div className="flex items-center w-full">
              <FaMapMarkerAlt className="text-gray-700 dark:text-gray-300 mr-2" />
              <select
                value={selectedPlace}
                onChange={(e) => setSelectedPlace(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
                <option value="" disabled>
                  Select a place
                </option>
                <option value="new-york">New York</option>
                <option value="san-francisco">San Francisco</option>
                <option value="los-angeles">Los Angeles</option>
              </select>
            </div>
          </div>

          {/* Start Date */}
          <div className="mb-4 w-full sm:w-full md:w-1/4">
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* End Date */}
          <div className="mb-4 w-full sm:w-full md:w-1/4">
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        {/*  Budget, and Preferences */}
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div className="mb-4 md:col-span-2 lg:col-span-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
              Budget
            </label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Travel Mate Preferences */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Travel Mate Preferences
          </label>
          <Select
            options={travelOptions}
            isMulti
            onChange={setTravelPreferences}
            placeholder="Select Preferences"
            className="dark:text-white"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Media Upload */}
          <label
            htmlFor="mediaUpload"
            className="flex items-center cursor-pointer text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828L8.343 3m4.95-2H16a2 2 0 012 2v3.172a2 2 0 01-.586 1.414l-6.586 6.586a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828L8.343 3M8.343 3H5a2 2 0 00-2 2v10a2 2 0 002 2h3.172m3.414 3.414a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-6.586-6.586a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l6.586 6.586z"
              />
            </svg>
            Add Media
          </label>
          <input
            id="mediaUpload"
            type="file"
            accept="image/*,video/*"
            className="hidden"
            multiple
            onChange={handleMediaUpload}
          />

          {/* Post Button */}
          <button
            onClick={handlePost}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
          >
            Post
          </button>
        </div>

        {/* Uploaded Media Preview */}
        {/* {media.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Preview:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 relative">
              {media.map((file, index) => (
                <div className="relative" key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Media Preview ${index}`}
                    className="w-full sm:h-20  h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute -top-0 right-0 text-white bg-gray-800 bg-opacity-50 p-1 rounded-lg "
                  >
                    <CloseIcon fontSize="small" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Uploaded Media Preview */}
        {media.length > 0 && (
          <div className="mt-4 overflow-hidden">
            <p className="text-sm text-gray-500 dark:text-gray-400">Preview:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 relative">
              {media.map((file, index) => (
                <div className="relative" key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview ${index}`}
                    className="w-40  rounded-lg mt-2 max-w-full max-h-35 object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-0 bg-gray-500 text-gray-200 dark:text-gray-800 rounded-full p-1 text-sm focus:outline-none hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-300"
                  >
                    <CloseIcon fontSize="small" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddPost;
