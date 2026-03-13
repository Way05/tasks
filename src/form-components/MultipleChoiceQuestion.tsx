import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [ans, setAns] = useState<string>(options[0]);
    function updateAns(event: React.ChangeEvent<HTMLSelectElement>) {
        setAns(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select value={ans} onChange={updateAns}>
                    {options.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {ans === expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
        </div>
    );
}
