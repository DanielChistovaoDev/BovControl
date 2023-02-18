import React, { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import getChecklistsAPI from "../fetchs/getChecklistsAPI";

const useChecklists = () => {
    const { setChecklists } = useContext(MyContext);

    const getChecklists = async() => {
        const response = await getChecklistsAPI()
            .then((res) => setChecklists(res.data))
            .catch(() => null)

    }

    return {
        getChecklists,
    }
};

export default useChecklists;