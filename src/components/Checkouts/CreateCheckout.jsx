import { useEffect, useState } from "react"
import { getAvailableMaterial } from "../../data/materialsData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getPatrons } from "../../data/patronsData";
import { createCheckout } from "../../data/checkoutsData";
import { useNavigate } from "react-router-dom";


export const CreateCheckout = () => {
    const [availableMaterials, setAvailableMaterials] = useState([]);
    const [patrons, setPatrons] = useState([]);
    const [materialId, setMaterialId] = useState(0);
    const [patronId, setPatronId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getAvailableMaterial().then(setAvailableMaterials);
        getPatrons().then(setPatrons)
    }, [])

    const submit = () => {
        const newCheckout = {
            materialId,
            patronId,
        }

        createCheckout(newCheckout).then(() => {
            navigate("/checkouts")
        })
    }

    return (
        <div className="container">
            <h4>Add a new Checkout</h4>
            <Form>
                <FormGroup>
                    <Label htmlFor="materialId">Material</Label>
                    <Input
                        name="material"
                        type="select"
                        value={materialId}
                        onChange={(e) => {
                            setMaterialId(parseInt(e.target.value))
                        }}
                    >
                        <option value="0">Choose Material</option>
                        {availableMaterials.map((m) => (
                            <option value={m.id} key={m.id}>{m.materialName}</option>
                        ))}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="patronId">Patron</Label>
                    <Input
                        name="patron"
                        type="select"
                        value={patronId}
                        onChange={(e) => {
                            setPatronId(parseInt(e.target.value))
                        }}
                    >
                        <option value="0">Choose Patron</option>
                        {patrons.map((p) => (
                            <option value={p.id} key={p.id}>{p.firstName} {p.lastName}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Button onClick={submit}>Submit</Button>
            </Form> 
        </div>
    )
}