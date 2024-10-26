import ReactMarkdown from 'react-markdown';
import {useEffect, useState} from "react";

export interface props {
    src: string;
}
const MarkdownToHTML = ({src}: props) => {

    const [markdown, setMarkdown] = useState<string>();
    useEffect( () => {
        const getMarkdown = async () => {
            try {
                const result = await fetch(src);
                setMarkdown(await result.text());
                console.log(result);
            } catch (e) {
                setMarkdown("Error: " + e);
            }
        }
        getMarkdown();
    }, [src])

    return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default MarkdownToHTML