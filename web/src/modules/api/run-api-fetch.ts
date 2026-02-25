import { getApiBase } from "./get-api-base";

export function runApiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const apiBase = getApiBase();
    const url = `${apiBase}${endpoint}`;
    
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            return response.json() as Promise<T>;
        });
}