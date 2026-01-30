
const Search = ({setQuery, fetchResult}) =>{

    return(
        <div className="flex flex-row absolute bottom-6">
        <input type="text" className="bg-orange-50  min-w-xl py-2 text-black rounded-full rounded-r-none px-4" onChange={(e)=>{setQuery(e.target.value)}} />
        
        <button onClick={fetchResult} className="bg-amber-400 text-black p-2 rounded-r-full border-4 border-amber-50 text-bold">Search</button>
         </div>
    )
}

export default Search;