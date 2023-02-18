import axios from 'axios';
import IChecklistAPI from '../interfaces/IChecklistsAPI';

interface IdeleteChecklistAPI{
    id: string
}

const createNewChecklistAPI = async(list: IChecklistAPI[]) => {
    const result = await axios.post<IdeleteChecklistAPI>('http://challenge-front-end.bovcontrol.com/v1/checkList')
    return result
};

export default createNewChecklistAPI;