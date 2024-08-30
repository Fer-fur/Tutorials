
type faqProps = {
    question: string,
    answer: string,
    isOpen: boolean,
    onToggle: () => void
}

export const Faq = ( {question, answer, isOpen, onToggle  }: faqProps) => {

    return (
        <div className="mb-8">
            <div className="flex ">
                <p className=" mr-auto font-bold"> {question} </p>
                <button 
                    className=" bg-purple-500 w-5 h-5 rounded-full text-white text-lg flex items-center justify-center"
                    onClick={onToggle}
                >
                    + 
                </button>
            </div>
            <p className={` text-gray-400 text-sm my-4 transition-opacity ease-out duration-700
                            ${isOpen ? "h-auto opacity-100 " : "h-0 opacity-0 overflow-hidden"}`
                        }
                            
            >
                {answer}
            </p>
            
        </div> 
    )
}
