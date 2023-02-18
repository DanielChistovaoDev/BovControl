import axios from 'axios';
import IChecklistAPI from '../interfaces/IChecklistsAPI';

const getChecklistsAPI = async(
    id: string,
    fields: Partial<IChecklistAPI>
) => {
    const uri = `http://challenge-front-end.bovcontrol.com/v1/checkList/${id}`

    const result = await axios.get<IChecklistAPI>(uri)
    return result
};