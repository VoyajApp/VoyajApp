const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
if (!API_BASE) {
    throw new Error("NEXT_PUBLIC_API_BASE environment variable is not set");
}

export function getApiBase() {
    // This function should only run in the browser, so we can safely access window.location
    // We should take our current origin and replace 3000 with 8000 in development
    // In production we rely on an environment variable to set the API base URL
    if (typeof window === "undefined") {
        throw new Error("getApiBase should only be called in the browser");
    }
    
    const origin = window.location.origin;
    if (process.env.NODE_ENV === "development") {
        return origin.replace("3000", "8000");
    } else {
        return API_BASE;
    }
}