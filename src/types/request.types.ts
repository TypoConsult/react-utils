export interface RequestOptions {
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    body?: { [key: string]: any };
}

export type RequestError = null | any;
export type RequestFunction = (options?: RequestOptions) => Promise<void>;
export type RequestState<T = any> = { data: T, loading: boolean, error: RequestError, refetch: RequestFunction };
export type LazyRequestHookReturn = [ RequestFunction, RequestState ];
