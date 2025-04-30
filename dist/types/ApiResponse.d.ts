/**
 * Represents a standardized API response structure.
 *
 * @template T - The type of the data being returned in the response.
 *
 * @property {boolean} success - Indicates whether the API request was successful.
 * @property {string} [message] - An optional message providing additional context about the response.
 * @property {T} [data] - The data returned by the API, if applicable.
 * @property {string[]} [errors] - An optional array of error messages, if any occurred during the API request.
 *
 * @method static success<T>(data: T, message?: string): ApiResponse<T>
 * Creates a successful API response.
 * @param {T} data - The data to include in the response.
 * @param {string} [message] - An optional message providing additional information about the response.
 * @returns {ApiResponse<T>} An instance of `ApiResponse` representing a successful response.
 *
 * @method static error<T>(message: string, errors?: string[]): ApiResponse<T>
 * Creates an error response object.
 * @param {string} message - A descriptive error message.
 * @param {string[]} [errors] - An optional array of detailed error messages.
 * @returns {ApiResponse<T>} An instance of `ApiResponse` representing an error response.
 */
export declare class ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    errors?: string[];
    /**
     * Constructs an instance of the ApiResponse class.
     *
     * @template T - The type of the data being returned in the response.
     * @param success - Indicates whether the API request was successful.
     * @param message - An optional message providing additional information about the response.
     * @param data - Optional data returned by the API, of type T.
     * @param errors - An optional array of error messages, if any occurred during the API request.
     */
    constructor(success: boolean, message?: string, data?: T, errors?: string[]);
    /**
     * Creates a successful API response.
     *
     * @template T - The type of the data being returned in the response.
     * @param data - The data to include in the response.
     * @param message - An optional message providing additional information about the response.
     * @returns An instance of `ApiResponse` representing a successful response.
     */
    static success<T>(data: T, message?: string): ApiResponse<T>;
    /**
     * Creates an error response object.
     *
     * @template T - The type of the data payload (if any).
     * @param message - A descriptive error message.
     * @param errors - An optional array of detailed error messages.
     * @returns An instance of `ApiResponse` representing an error response.
     */
    static error<T>(message: string, errors?: string[]): ApiResponse<T>;
}
//# sourceMappingURL=ApiResponse.d.ts.map