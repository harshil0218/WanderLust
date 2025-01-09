import React, { useState, useEffect } from "react";

function SpeechDemo() {
  const [isListening, setIsListening] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");
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
        }, 3000);
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

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Speech Recognition
      </h1>
      <div className="flex space-x-4">
        <button
          onClick={startListening}
          disabled={isListening}
          className={`px-4 py-2 text-white rounded-lg ${
            isListening
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Start
        </button>
        <button
          onClick={stopListening}
          disabled={!isListening}
          className={`px-4 py-2 text-white rounded-lg ${
            !isListening
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Stop
        </button>
      </div>
      <p className="mt-4 text-gray-800 dark:text-gray-200">{transcript}</p>
    </div>
  );
}

export default SpeechDemo;
