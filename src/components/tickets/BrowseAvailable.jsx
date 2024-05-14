import { useEffect, useState } from "react"
import { getAvailableMaterial } from "../../data/materialsData";
import { Table } from "reactstrap";


export const BrowseAvailable = () => {
    const [availableMaterials, setAvailableMaterials] = useState([]);

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
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}