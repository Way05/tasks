import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [ans, setAns] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Control value={ans} onChange={updateName} />
            </Form.Group>
            {ans === expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
        </div>
    );
}
