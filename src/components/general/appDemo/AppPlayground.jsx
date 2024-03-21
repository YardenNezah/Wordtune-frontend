import React, { useEffect, useState } from 'react'
import FlexContainer from "../../layout/FlexContainer";
import TextContent from '../../layout/TextContent';
import useFetch from '../../../utils/hooks/useFetch';
import Error from '../../layout/Error';
import Loader from '../../layout/Loader';
import summarized from '../../../images/summarized.svg';

const AppPlayground = () => {
    const { reports, error, loading } = useFetch('http://localhost:1337/api/reports');
    const [currentReport, setCurrentReport] = useState();

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
                    <p className="report-title">{currentReport?.attributes?.Title}</p>
                    {
                        currentReport?.hasSummarized ? <><p className={`report-text summarized fade-in`}>{currentReport?.attributes?.Summarized_Text}</p>
                            <button className="summarized-button"><img src={summarized} alt={summarized}></img> Summarized</button>
                        </> : <>
                            <p className="report-text">{currentReport?.attributes?.Text}</p>
                            <button className="summarize-button" onClick={() => setCurrentReport({ ...currentReport, hasSummarized: true })}>Summarize</button>
                        </>
                    }
                </div>
            </FlexContainer>}
        </>

    )
}

export default AppPlayground