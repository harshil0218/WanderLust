import { React, useState,useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
function Search() {
 const [isListening, setIsListening] = useState(false);
   const [transcript, setTranscript] = useState("");
   const [recognition, setRecognition] = useState(null);
   let silenceTimer = null;
 
   useEffect(() => {
     const SpeechRecognition =
       window.SpeechRecognition || window.webkitSpeechRecognition;
     if (SpeechRecognition) {
       const recognitionInstance = new SpeechRecognition();
       recognitionInstance.continuous = true;
       recognitionInstance.interimResults = true;
       recognitionInstance.onstart = () => setIsListening(true);
       recognitionInstance.onresult = (event) => {
         clearTimeout(silenceTimer);
         let interimTranscript = "";
         for (let i = event.resultIndex; i < event.results.length; i++) {
           const transcriptPart = event.results[i][0].transcript;
           if (event.results[i].isFinal) {
             setTranscript((prev) => prev + transcriptPart);
           } else {
             interimTranscript += transcriptPart;
           }
         }
         setTranscript((prev) => prev );
         silenceTimer = setTimeout(() => {
           recognitionInstance.stop();
         }, 2000);
       };
       recognitionInstance.onend = () => setIsListening(false);
       recognitionInstance.onerror = (event) => console.error(event.error);
       setRecognition(recognitionInstance);
     } else {
       console.error("Browser doesn't support speech recognition.");
     }
   }, []);
 
   const startListening = () => {
     if (recognition && !isListening) {
       setTranscript("");
       // setInterimTranscript(""); // Clear previous transcript
       recognition.start();
     }
   };
 
   const stopListening = () => {
     if (recognition && isListening) {
       recognition.stop();
       clearTimeout(silenceTimer);
     }
   };

  useEffect(() => {
    return () => clearTimeout(silenceTimer); // Clean up timer on unmount
  }, []);
  const recognizeSpeech = () => {
    const sp_recog = webkitSpeechRecognition || SpeechRecognition;
  };
  return (
    <form class="flex items-center max-w-sm mx-auto ">
      <label for="voice-search" class="sr-only">
        Search
      </label>
      <div class="relative w-full">
        <div class="absolute inset-y-0  flex items-center ps-3">
          {/* Search */}
          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white ">
            <SearchIcon className="" />
          </button>
        </div>
        <input
          type="text"
          value={transcript}
          id="voice-search"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search "
          onChange={(e) => setTranscript(e.target.value)}
          required
        />
        {transcript.length > 0 && (
          <button
            type="button"
            class="absolute inset-y-0 end-9 flex items-center ps-3"
            onClick={() => setTranscript("")}
          >
            <ClearIcon className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </button>
        )}
        <button
          type="button"
          class={`absolute inset-y-0 end-0 flex items-center pe-3 ${isListening ? "text-blue-500" : "text-gray-500 dark:text-gray-400"} hover:text-gray-900 dark:hover:text-white`}
          onClick={startListening}
          disabled={isListening}
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Search;
