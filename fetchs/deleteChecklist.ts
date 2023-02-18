import axios from 'axios';

interface IdeleteChecklistAPI{
    id: string
}

const createNewChecklistAPI = async(id: string) => {
    const uri = `http://challenge-front-end.bovcontrol.com/v1/checkList/${id}`

    const result = await axios.post<IdeleteChecklistAPI>(uri)
    return result
};

export default createNewChecklistAPI;