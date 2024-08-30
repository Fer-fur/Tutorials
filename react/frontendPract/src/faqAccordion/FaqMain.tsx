import { useState } from "react"
import { Faq } from "./Faq"
import { faqs } from "./faqs"


export const FaqMain = () => {

    const [toToggle, setToToggle] = useState<number | null>(null)

    function handleIndexToToggle(index: number) {

        setToToggle( toToggle !== index ? index : null )
    }

    return (
        <div className=" bg-gray-200 flex justify-center h-screen items-center">
            <div className=" bg-gradient-to-b from-indigo-950 from-40% to-purple-200 h-[480px] w-[600px] flex justify-center items-center">
                <div className=" p-4 bg-white rounded-lg w-96 max-w-96">
                    <h2 className=" font-extrabold text-2xl mb-4">FAQs</h2>
                    <div>
                        {faqs.map( (faq, index) => (
                            <Faq 
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen= {toToggle === index}
                                onToggle={() => handleIndexToToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
