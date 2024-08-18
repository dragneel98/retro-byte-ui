import React from 'react';
import "./accordion.css";

interface AccordionProps {
    title: string;
    content: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    return (
        <>
            <details name='accordion'>
                <summary>
                    {title}
                </summary>
                <div>
                    <p>{content}</p>
                </div>
            </details>
            <details name='accordion'>
                <summary>
                    {title}
                </summary>
                <div>
                    <p>{content}</p>
                </div>
            </details>
        </>
    );
};

