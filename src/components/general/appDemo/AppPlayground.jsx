import React, { useEffect, useState } from 'react'
import FlexContainer from "../../layout/FlexContainer";
import TextContent from '../../layout/TextContent';
import useFetch from '../../../utils/hooks/useFetch';
import Error from '../../layout/Error';
import Loader from '../../layout/Loader';
import summarized from "../../../images/summarized.svg";

const AppPlayground = () => {
    const { reports, error, loading } = useFetch('https://passionate-family-853ce83e20.strapiapp.com/api/reports');
    const [currentReport, setCurrentReport] = useState();
    const [text, setText] = useState();

    useEffect(() => {
        if (reports) setCurrentReport(reports[0]);
    }, [reports])

    useEffect(() => {
        localStorage.getItem(currentReport?.id) ? setText(currentReport?.attributes.Summarized_Text) : setText(currentReport?.attributes.Text);
    }, [currentReport]);

    const summarizeText = () => {
        localStorage.setItem(currentReport.id, true);
        setText(currentReport?.attributes.Summarized_Text)
    }

    return (
        <>
            {loading && <Loader />}
            {error && <Error />}
            {reports && <FlexContainer>
                <div className="playground-content">
                    <TextContent>
                        Whether you are reading a lengthy blog post, analyzing a report or going through a paper, Wordtune helps you digest what is important. Cut through the word count to find the words that count.
                    </TextContent>
                    <div className='buttons-container'>
                        {reports.map(report => <button className="report-title-button cta-button" style={{ background: currentReport === report && "#753fea", color: currentReport === report && "white" }} key={report.attributes.Title} onClick={() => setCurrentReport(report)}>{report.attributes.Title}</button>)}
                        <span>And more...</span>
                    </div>
                </div>
                <div className="playground-result">
                    <p className="report-title">{currentReport?.attributes?.Title}</p>
                    <><p className={`report-text ${localStorage.getItem(currentReport?.id) ? "summarized fade-in" : ""}`}>{text}</p>
                        <button className={`${localStorage.getItem(currentReport?.id) ? "summarized-button" : "summarize-button"}`} onClick={summarizeText}> {localStorage.getItem(currentReport?.id) ? <><img src={summarized} alt={summarized}></img> Summarized</> : "Summarize"}</button>
                    </>
                </div>
            </FlexContainer>}
        </>

    )
}
export default AppPlayground

