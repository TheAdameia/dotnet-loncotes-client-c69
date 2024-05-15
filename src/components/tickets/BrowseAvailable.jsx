import { useEffect, useState } from "react"
import { getAvailableMaterial } from "../../data/materialsData";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";


export const BrowseAvailable = () => {
    const [availableMaterials, setAvailableMaterials] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAvailableMaterial().then(setAvailableMaterials)
    },[])

    return(
        <div className="container">
            <div className="sub-menu bg-light">
                <h4>Available Material</h4>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {availableMaterials.map((m) => (
                        <tr key={`materials-${m.id}`}>
                        <th scope="row">{m.id}</th>
                        <td>{m.materialName}</td>
                        <td>{m.materialType.name}</td>
                        <td>{m.genre.name}</td>
                        <td><Button onClick={() => navigate(`/checkouts/new`)}>Check out</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}