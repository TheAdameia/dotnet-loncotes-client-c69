import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPatrons } from "../../data/patronsData";


export const PatronDetails = () => {
    const { id } = useParams();

    const [patron, setPatron] = useState(null);

    useEffect(() => {
        getPatrons(id).then(setPatron)
        //need to work on getPatrons to use that ID parameter
    }, []);

    if (!patron){
        return null;
    }

    return (
        <div className="container">
            
        </div>
    )
}