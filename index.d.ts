import axios, {
    AxiosDefaults, AxiosHeaderValue,
    AxiosInterceptorManager, AxiosInterceptorOptions,
    AxiosRequestConfig, AxiosRequestHeaders,
    AxiosResponse, HeadersDefaults
} from "axios";
import type {CookieJar} from 'tough-cookie';


export interface CloudbypassRequestConfig<D = any> extends AxiosRequestConfig {
    cb_apikey?: string;
    cb_proxy?: string;
    cb_part?: number;
    cb_apihost?: string;
    cb_options?: any;
    jar?: CookieJar;
}

export interface InternalCloudbypassRequestConfig<D = any> extends CloudbypassRequestConfig {
    headers: AxiosRequestHeaders;
}

export interface CloudbypassInterceptorManager<V> extends AxiosInterceptorManager<V> {
    use(onFulfilled?: ((value: V) => V | Promise<V>) | null, onRejected?: ((error: any) => any) | null, options?: AxiosInterceptorOptions): number;

    eject(id: number): void;

    clear(): void;
}

export class CloudbypassProxy {
    readonly username: string;
    readonly password: string;
    readonly region: string;
    readonly expire: number;
    readonly gateway: string;
    readonly sessionId: string;

    constructor(auth: string);

    static checkAuth(auth: string): {
        username: string;
        password: string;
    };

    setExpire(expire: number): CloudbypassProxy;

    setDynamic(): CloudbypassProxy;

    setGateway(gateway: string): CloudbypassProxy;

    setRegion(region: string): CloudbypassProxy;

    clearRegion(): CloudbypassProxy;

    parseOptions(): CloudbypassProxy;

    format(format_str?: string): string;

    copy(): CloudbypassProxy;

    limit(count: string): IterableIterator<string>;

    loop(count: string): IterableIterator<string>;

    toString(): string;
}

export class Cloudbypass {
    defaults: AxiosDefaults;
    interceptors: {
        request: AxiosInterceptorManager<InternalCloudbypassRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };

    getUri(config?: CloudbypassRequestConfig): string;

    request<T = any, R = AxiosResponse<T>, D = any>(config: CloudbypassRequestConfig<D>): Promise<R>;

    get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CloudbypassRequestConfig<D>): Promise<R>;

    delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CloudbypassRequestConfig<D>): Promise<R>;

    head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CloudbypassRequestConfig<D>): Promise<R>;

    options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CloudbypassRequestConfig<D>): Promise<R>;

    post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: CloudbypassRequestConfig<D>): Promise<R>;

    put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: CloudbypassRequestConfig<D>): Promise<R>;

    patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: CloudbypassRequestConfig<D>): Promise<R>;

    getBalance(apikey: string): Promise<number>;
}

export class BypassError<T = unknown, D = any> extends Error {
    constructor(
        message?: string,
        code?: string,
        config?: InternalCloudbypassRequestConfig,
        request?: any,
        response?: AxiosResponse<T, D>
    );

    config?: InternalCloudbypassRequestConfig<D>;
    code?: string;
    request?: any;
    response?: AxiosResponse<T, D>;
    isBypassError: boolean;
    status?: number;
    toJSON: () => object;
    cause?: Error;

    static from<T = unknown, D = any>(
        error: Error | unknown,
        code?: string,
        config?: InternalCloudbypassRequestConfig<D>,
        request?: any,
        response?: AxiosResponse<T, D>,
        customProps?: object,
    ): BypassError<T, D>;
}

export interface CloudbypassInstance extends Cloudbypass {
    <T = any, R = AxiosResponse<T>, D = any>(config: CloudbypassRequestConfig<D>): Promise<R>;

    <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: CloudbypassRequestConfig<D>): Promise<R>;

    defaults: Omit<AxiosDefaults, 'headers'> & {
        headers: HeadersDefaults & {
            [key: string]: AxiosHeaderValue
        }
    };
}

export function isBypassError<T = any, D = any>(payload: any): payload is BypassError<T, D>;

export interface CloudbypassStatic extends CloudbypassInstance {
    isBypassError: typeof isBypassError;
    BypassError: typeof BypassError;

    createProxy(auth: string): CloudbypassProxy;

    create(config?: CloudbypassRequestConfig): CloudbypassInstance;
}

declare const cloudbypass: CloudbypassStatic;

export default cloudbypass;