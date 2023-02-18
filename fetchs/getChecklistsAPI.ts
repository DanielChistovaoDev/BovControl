import axios from 'axios';
import IChecklistAPI from '../interfaces/IChecklistsAPI';

const getChecklistsAPI = async() => {
    const result = await axios.get<IChecklistAPI[]>('http://challenge-front-end.bovcontrol.com/v1/checkList')
    return result
};

export default getChecklistsAPI;