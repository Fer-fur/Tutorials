import { Fragment, useEffect, useState } from "react"
import useDebounce from "./useDebounce";

const fruitsArr = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

export default function FruitFilter() {

    const [search, setSearch] = useState<string>("");
    const [suggestion, setSuggestion] = useState<string[]>([]);
    const debouncedInput = useDebounce(search, 200)

    // updates the search state based on user input
    function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }

    // debounce here to delay fetching
    useEffect(()=> {
        if(debouncedInput) {
            const filteredFruits = fruitsArr.filter( fruit => 
                fruit.toLocaleLowerCase().includes(debouncedInput.toLocaleLowerCase())
            )
            setSuggestion(filteredFruits);
        } else {
            return setSuggestion([])
        }
    }, [debouncedInput])

    function highlightText(text: string, keyword: string) {
        if (!keyword) {
            return text; // Return the original text if there's no keyword
        }
        
        // Turn the keyword into regex
        const regexKey = new RegExp(`${keyword}`, 'gi');
        const parts = text.split(regexKey); // Split the text based on the keyword
        
        // Handle the case where there are no matches
        if (parts.length === 1) {
            return text;
        }
    
        // Find matches and wrap them with <strong> tags
        const matches = text.match(regexKey);
    
        return (
            <>
                {parts.map((part, index) => (
                    <Fragment key={index}>
                        {part}
                        {matches && index < matches.length && <strong>{matches[index]}</strong>}
                        
                    </Fragment>
                ))}
            </>
        );
    }
    

    return (
    <div className="w-64">
        <input 
            type="text" 
            value={search}
            onChange={handleSearchChange}
            placeholder="Enter a fruit..."
            className=" p-3 border w-full"
        />
        {suggestion.length > 0 ? 
            <ul className="bg-white px-2 py-1 absolute z-10 w-64 border border-black">
                {suggestion.map( (fruit, index) => (
                    <li 
                        key={index}
                        className="border-b border-gray-300 last:border-b-0 cursor-pointer hover:font-light py-1.5 hover:bg-slate-100"
                    >
                        {highlightText(fruit, search)}
                    </li>
                ))}
            </ul>
        : null
        }
        <div className="h-60 flex justify-center items-center border mt-2 bg-gray-400 ">
            Random content
        </div>
    </div>
    )
}
