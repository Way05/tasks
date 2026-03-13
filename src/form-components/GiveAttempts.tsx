import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [att, setAtt] = useState<number>(3);
    const [watt, setWatt] = useState<string>();
    return (
        <div>
            <h3>Give Attempts: {att}</h3>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={watt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.value.trim() !== "") {
                            setWatt(event.target.value);
                        }
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAtt(att - 1);
                }}
                disabled={att === 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    if (watt) {
                        setAtt(att + parseInt(watt));
                    }
                }}
            >
                gain
            </Button>
        </div>
    );
}
