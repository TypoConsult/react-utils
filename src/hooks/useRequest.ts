import { useEffect } from 'react';
import { RequestOptions, RequestState } from '../types/request.types';
import useLazyRequest from './useLazyRequest';

const useRequest = <T>(url: string, options?: RequestOptions): RequestState<T> => {
    const [sendRequest, state] = useLazyRequest<T>(url, options);

    useEffect(
        () => {
            sendRequest(options);
        },
        [ sendRequest ]
    );

    return state;
};

export default useRequest;
