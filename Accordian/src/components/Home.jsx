import Content from "./Content"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from "react";


const Home = () => {

    const contents = Content

    const [isClicked, setIsClicked] = useState()

    const handleToggle = (id) => {
        setIsClicked(id)
    }

    return (
        <div className="mx-auto mt-20 w-[500px]">
            {
                contents.map((content, index) => {
                    return (
                        <Accordion expanded={isClicked == content.id} onChange={() => handleToggle(content.id)}>
                            <AccordionSummary className="!bg-blue-200 !mb-2" sx={{borderTop: '2px solid #6495ED'}}>
                                <div className="flex justify-between w-full">
                                    <span>{content.id + "  "}{content.question}</span>
                                    <span>{isClicked== content.id ? "+" : "-"}</span>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {content.answer}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

export default Home