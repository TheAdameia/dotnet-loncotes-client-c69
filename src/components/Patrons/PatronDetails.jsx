import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPatron } from "../../data/patronsData";
import { Button, Table } from "reactstrap";


export const PatronDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patron, setPatron] = useState(null);

    useEffect(() => {
        getPatron(id).then(setPatron)
    }, []);

    if (!patron){
        return null;
    }


    return (
        <div className="container">
            <h2>{patron.firstName} {patron.lastName}</h2>
            <Button onClick={() => navigate(`edit`)}>Edit email and address</Button>
            <Table>
                <tbody>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{patron.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{patron.email}</td>
                    </tr>
                </tbody>
            </Table>
            <h5>Checkouts</h5>
            {patron.checkouts?.length ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Checkout Date</th>
                            <th>Return Date</th>
                            <th>Late Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patron.checkouts.map((co) => (
                            <tr key={co.id}>
                                <td>{co.checkoutDate}</td>
                                <td>{co.returnDate}</td>
                                <td>{co.lateFee}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>Patron has no checkouts</p>
            )}
        </div>
    )
}