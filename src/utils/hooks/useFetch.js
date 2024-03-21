import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [reports, setReports] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const res = await axios.get(url);
                    setReports(res.data.data)
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            };
            fetchData();
        },
        [url]
    );

    return { reports, error, loading };
}

export default useFetch;