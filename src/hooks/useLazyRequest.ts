import { useCallback, useState } from 'react';
import { LazyRequestHookReturn, RequestError, RequestFunction, RequestOptions } from '../types/request.types';

const defaultOptions: RequestOptions = {
    method: 'GET'
};

const useLazyRequest = <T>(url: string, instanceOptions?: RequestOptions): LazyRequestHookReturn<T> => {
    const [ data, setData ] = useState<T | null>(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<RequestError>(null);

    const sendRequest: RequestFunction = useCallback(async (options?: RequestOptions) => {
        const { method, body } = {
            ...defaultOptions,
            ...instanceOptions,
            ...options
        };

        try {
            const response = await fetch(url, {
                method,
                body: JSON.stringify(body),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();

            setData(responseData);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    }, [ url, instanceOptions ]);

    return [ sendRequest, { data, loading, error, refetch: sendRequest } ];
};

export default useLazyRequest;
