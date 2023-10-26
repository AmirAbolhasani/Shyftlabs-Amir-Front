import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ParsedNameValue } from "./ParsedNameValue";
import { URLOperation } from "./URLOperation";

export abstract class BaseServer
{
    protected domain: string = "";
    constructor(domain: string)
    {
        this.domain = domain;
    }
    private async request<ResData = any, ReqData = any>(onRequest: (url: string, data?: any, config?: AxiosRequestConfig<ReqData>) => Promise<AxiosResponse<ResData>>, sub: string, query?: { [name: string]: ParsedNameValue }, data?: ReqData, config?: AxiosRequestConfig<ReqData>): Promise<{ response: AxiosResponse<ResData>, data: ResData }>
    {
        let url: string = URLOperation.getLink(this.domain, sub, query);
        if (!config)
            config = { headers: {} };
        try
        {
            let response: AxiosResponse<ResData> = await onRequest(url, data, config);
            return { response, data: response.data };
        } catch (error)
        {
            if (error instanceof AxiosError)
                if (error?.response?.data)
                    throw new Error(error.response.data);
            throw error;
        }
    }
    protected async get<ResData = any, ReqData = any>(sub: string, query?: { [name: string]: ParsedNameValue }, config?: AxiosRequestConfig<ReqData>): Promise<{ response: AxiosResponse<ResData>, data: ResData }>
    {
        return await this.request(async (url: string, _?: any, config?: AxiosRequestConfig<ReqData>) =>
        {
            return await axios.get(url, config);
        }, sub, query, undefined, config);
    }
    protected async post<ResData = any, ReqData = any>(sub: string, query?: { [name: string]: ParsedNameValue }, data?: ReqData, config?: AxiosRequestConfig<ReqData>): Promise<{ response: AxiosResponse<ResData>, data: ResData }>
    {
        return await this.request(async (url: string, data: ReqData, config?: AxiosRequestConfig<ReqData>) =>
        {
            return await axios.post(url, data, config);
        }, sub, query, data, config);
    }
    protected async put<ResData = any, ReqData = any>(sub: string, query?: { [name: string]: ParsedNameValue }, data?: ReqData, config?: AxiosRequestConfig<ReqData>): Promise<{ response: AxiosResponse<ResData>, data: ResData }>
    {
        return await this.request(async (url: string, data: ReqData, config?: AxiosRequestConfig<ReqData>) =>
        {
            return await axios.put(url, data, config);
        }, sub, query, data, config);
    }
    protected async delete<ResData = any, ReqData = any>(sub: string, query?: { [name: string]: ParsedNameValue }, config?: AxiosRequestConfig<ReqData>): Promise<{ response: AxiosResponse<ResData>, data: ResData }>
    {
        return await this.request(async (url: string, _?: any, config?: AxiosRequestConfig<ReqData>) =>
        {
            return await axios.delete(url, config);
        }, sub, query, undefined, config);
    }
}