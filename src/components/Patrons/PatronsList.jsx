import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { getPatrons } from "../../data/patronsData"


export const PatronList = () => {
    const [patrons, setPatrons] = useState([]);

    useEffect(() => {
        getPatrons().then(setPatrons)
    }, []);

    return (
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Patrons</h4>
                <Link to="/patrons/create">Add Patron</Link>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {patrons.map((p) =>
                    <tr key={p.id}>
                        <th scope="row">{p.Id}</th>
                        <td>{p.firstName} {p.lastName}</td>
                        <td>{p.address}</td>
                        <td>{p.email}</td>
                        <td>{p.isActive ? "active" : "inactive"}</td>
                        <td>
                            <Link to={`${p.id}`}>Details</Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}