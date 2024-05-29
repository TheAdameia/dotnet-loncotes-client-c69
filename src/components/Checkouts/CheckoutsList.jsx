import { useEffect, useState } from "react"
import { getCheckouts } from "../../data/checkoutsData";
import { Table } from "reactstrap";


export const CheckoutList = () => {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts)
    },[])

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Checkouts</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>MaterialId</th>
                        <th>PatronId</th>
                        <th>Checkout Date</th>
                        <th>Return Date</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((co) =>
                    <tr key={co.id}>
                        <th scope="row">{co.id}</th>
                        <td>{co.materialId}</td>
                        <td>{co.patronId}</td>
                        <td>{co.checkoutDate}</td>
                        <td>{co.returnDate}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    )
}