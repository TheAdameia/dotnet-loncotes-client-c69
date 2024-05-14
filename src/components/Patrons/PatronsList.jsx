import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { flipPatronActivation, getPatrons } from "../../data/patronsData"


export const PatronList = () => {
    const [patrons, setPatrons] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        getPatrons().then(setPatrons)
    }, [refresh]);


    const ReactivatePatron = (patronID) => {
        flipPatronActivation(patronID).then(() => {
            setRefresh(!refresh)
            navigate("/patrons")
        })
    }

    const DeactivatePatron = (patronID) => {
        flipPatronActivation(patronID).then(() => {
            setRefresh(!refresh)
            navigate("/patrons")
        })
    }

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
                        {p.isActive 
                        ? <td><Button 
                            onClick={() => DeactivatePatron(p.id)}
                        >Deactivate</Button></td>
                        : <td><Button 
                            onClick={() => ReactivatePatron(p.id)}
                        >Reactivate</Button></td>}
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