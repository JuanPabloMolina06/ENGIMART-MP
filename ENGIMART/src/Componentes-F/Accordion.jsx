import { useState } from "react";

export default function Accordion({ title, answer }) {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return(
        <>
            <div className="py-2">
                <button onClick={() => setAccordionOpen(!accordionOpen)} className=" flex justify-between w-full">
                    <span className="text-cinza font-semibold">{title}</span>
                    <svg className="shrink-0 ml-8 w-4 h-4 mb-10" xmlns="http://www.w3.org/200/svg">
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}/>
                    </svg>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-cinza-claro font-medium text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden ">
                        {answer}
                    </div>
                </div>
            </div>
        </>
    )

}