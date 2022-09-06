import { useEffect } from 'react';
import { RequestOptions } from '../types/request.types';
import useLazyRequest from './useLazyRequest';

const useRequest = <T>(url: string, options?: RequestOptions) => {
    const [sendRequest, state] = useLazyRequest(url, options);

    useEffect(
        () => {
            sendRequest(options);
        },
        [ sendRequest ]
    );

    return state;
};

export default useRequest;
