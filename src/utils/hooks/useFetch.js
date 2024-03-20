import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, type) => {
    const [reports, setReports] = useState(null);
    const [plans, setPlans] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const res = await axios.get(url);
                    if(type === "reports") {
                        setReports(res.data.data)
                    } else setPlans(res.data.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            };
            fetchData();
        },
        [url, type]
    );

    return { reports, plans, error, loading };
}

export default useFetch;