import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPatrons } from "../../data/patronsData";
import { Table } from "reactstrap";


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
            <h2>{patron.firstName} {patron.lastName}</h2>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{}</td>
                    </tr>
                </tbody>
            </Table>
            <h5>Checkouts</h5>
            <h5>Late Fees</h5>
        </div>
    )
}