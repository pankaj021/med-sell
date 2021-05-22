import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const withHttp = (WrapedComponent, reqConfig) => {
    const enhancedComponent = (props) => {
        const [isLoading, setLoader] = useState(true);
        const [data, setData] = useState([]);
        const [error, setError] = useState("");
        useEffect(() => {
            Axios(reqConfig)
            .then(res => {
                setData(res.data);
                setError("");
                setLoader(false);
            })
            .catch(err => {
                setData([]);
                setError(err.message || "Something went wrong...");
            })
        }, [])

        return (
            <WrapedComponent isLoading={isLoading} error={error} data={data} {...props}/>
        )
    }
    return enhancedComponent;
}

export default withHttp;