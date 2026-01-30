import Search from "./Search"
import { useState } from "react"
import { GoogleGenAI } from "@google/genai"
import Markdown from "react-markdown"

const App = () => {

  const [query, setQuery] = useState("Gowtham")
  const [result, setResult] = useState()

  const ai = new GoogleGenAI
  ({apiKey:"AIzaSyBBZIvP7O2Y8DdIbbxaHnhYrd54hAjBBgM",});

  const fetchResult = async () => {
    const response = await ai.models.generateContent({
      model:"gemini-2.5-flash",
      contents:"imagine yourself as chatgpt.answer query i ask like chatgpt.Query:" +query,
    });
    setResult(response.text)
  }


  
  
  return(

  <div className="bg-linear-to-br from-purple-700 via-blue-950 to-red-700 text-white min-h-screen  flex flex-col justify-center items-center gap-5">
    {result? (
      <div>
        <h1 className="text-6xl text-center">Result</h1>
        <div className="w-4xl h-96 overflow-auto">
          <Markdown>{result}</Markdown>
        </div>
        
        
        </div>
    ) : (
      <div className="flex flex-col justify-center items-center" >
         <h1 className="text-6xl">Welcome to AI chatbot</h1>
     <p>
      start typing to get answers
     </p>
     </div>
    )}
    
     <Search setQuery={setQuery} fetchResult ={fetchResult}  />
    
  </div>
  )
}

export default App