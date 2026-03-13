import React, { useState } from "react";
import { Form } from "react-bootstrap";

const cols = [
    "red",
    "blue",
    "green",
    "white",
    "black",
    "grey",
    "orange",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [col, setCol] = useState<string>();
    function updateCol(event: React.ChangeEvent<HTMLInputElement>) {
        setCol(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {cols.map((c) => (
                    <Form.Check
                        key={c}
                        type="radio"
                        onChange={updateCol}
                        value={c}
                        checked={col === c}
                        style={{ backgroundColor: c }}
                    />
                ))}
            </Form.Group>
            <span>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: col }}
                >
                    {col}
                </span>
            </span>
        </div>
    );
}
