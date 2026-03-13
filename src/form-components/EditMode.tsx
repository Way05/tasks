import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("");
    const [mode, setMode] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check type="switch" checked={mode} onChange={updateMode} />
            {mode && (
                <Form.Group>
                    <Form.Control value={name} onChange={updateName} />
                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </Form.Group>
            )}
            <span>
                {name ? name : "Your name"} {student ? "is a" : "is not a"}{" "}
                student
            </span>
        </div>
    );
}
