export interface IServiceResponse<T> {
    success: boolean;
    data?: T
    error?: string;
    message?: string;
    statusCode?: number;
}