import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { editPatron, getPatron } from "../../data/patronsData";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


export const EditPatron = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [patron, setPatron] = useState({});
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    useEffect(() => {
        getPatron(id).then(setPatron);
    }, []);

    const submit = () => {
        const editedPatron = {
            id,
            email,
            address,
        };

        editPatron(editedPatron).then(() => {
            navigate("/patrons")
        })
    }

    return (
        <div className="container">
            <h3>Enter new address and email</h3>
            <Form>
                <FormGroup>
                    <Label htmlFor="addressNew">New Address</Label>
                    <Input
                        name="address"
                        type="text"
                        placeholder="placeholder"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="emailNew">New Email</Label>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </FormGroup>
                <Button onClick={submit}>Submit changes </Button>
            </Form>
        </div>
    )
}