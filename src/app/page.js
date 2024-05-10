"use client"
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  // State variables for tweet input and predicted sentiment
  const [tweet, setTweet] = useState('');
  const [sentiment, setSentiment] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the FastAPI endpoint
    try {
      const response=await axios.post('http://127.0.0.1:8000/predict_sentiment',{
        tweet: tweet,
      })
      console.log(response.data.sentiment);
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.log(error);
    }
    

    // Parse the JSON response
    

    // Update the state with the predicted sentiment
    setSentiment(data.sentiment);
  };

  return (
    /*<div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Sentiment Analysis</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Enter your tweet:</span>
          <input
            type="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <button
          type="submit"
          className="inline-block bg-indigo-500 text-black py-2 px-4 rounded-lg hover:bg-indigo-600"
        >
          Predict Sentiment
        </button>
      </form>
      {sentiment && (
        <p className="mt-4 text-black">
          The predicted sentiment for your tweet "<span className="font-semibold">{tweet}</span>" is: <span className={sentiment === 'Positive' ? 'text-green-500 font-semibold' : sentiment==='Neutral'?'text-blue-500 font-semibold' : 'text-red-700 font-semibold'}>{sentiment}</span>
        </p>
      )}
    </div>*/
    <div className="flex justify-center items-center h-screen">
      <div className="h-[20vw] w-full max-w-md bg-gray-800 border border-white rounded-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="text-white leading-none tracking-tight font-[Neue_Montreal] mb-1">Enter tweet:</span>
            <input
              type="text"
              value={tweet}
              onChange={(e) => {
                setTweet(e.target.value)
                setSentiment('')
              }}
              className="text-black rounded-md cursor-text border-collapse bg-gray-200 px-4 py-2"
            />
          </label>
          <button
            type="submit"
            className="text-white bg-orange-600 rounded-md text-md py-2 focus:outline-none hover:bg-orange-700 transition-colors duration-300 ease-in-out"
          >
            Predict Sentiment
          </button>
        </form>
        {sentiment && (
          <p className="text-white mt-4">
            The predicted sentiment for your tweet "<span className="font-semibold">{tweet}</span>" is:{" "}
            <span className={sentiment === "Positive" ? "text-green-500 font-semibold" : sentiment === "Neutral" ? "text-yellow-500 font-semibold" : "text-red-700 font-semibold"}>
              {sentiment}
            </span>
          </p>
        )}
      </div>
    </div>


  );

}
