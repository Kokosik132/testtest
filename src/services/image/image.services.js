import axiosInstance from '../axios.services';


export const GetImage = async () => {

    return await axiosInstance.get('/api/randomimage');
};
