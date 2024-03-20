import React, { useEffect, useState } from 'react'
import FlexContainer from "../../layout/FlexContainer";
import TextContent from '../../layout/TextContent';
import useFetch from '../../../utils/hooks/useFetch';
import Error from '../../layout/Error';
import Loader from '../../layout/Loader';

const AppPlayground = () => {
    const { reports, error, loading } = useFetch('http://localhost:1337/api/reports', "reports");
    const [currentReport, setCurrentReport] = useState(null);
    const [isSummarized, setIsSummarized] = useState(false);

    useEffect(() => {
        if (reports) setCurrentReport(reports[0]);
    }, [reports])

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
                    <p className="report-title">{currentReport?.attributes.Title}</p>
                    {
                        isSummarized ? <p className={`report-text fade-in`}>{currentReport?.attributes.Summarized_Text}</p> : <p className={`report-text`}>{currentReport?.attributes.Text}</p>
                    }
                    <button className="summarize-button" onClick={() => setIsSummarized(true)}>Summarize</button>
                </div>
            </FlexContainer>}
        </>

    )
}

export default AppPlayground