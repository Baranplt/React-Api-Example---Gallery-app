import apiClient from './axios'
const searchImages = async (ter) => {
    return await apiClient.get('search/photos', {
        params: {
            query: ter
        }
    })

}

export default searchImages