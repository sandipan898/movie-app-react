export const handleResponse = async (response) => {
    console.log(response);
    if (response.status >= 200 && response.status < 300) return response.data;
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error('Network error occured!');
};
export function handleError(error){
    console.error('API call failed. '+ error);
    throw error;
}