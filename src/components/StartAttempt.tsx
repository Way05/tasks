import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    return (
        <div>
            Start Attempt
            <Button
                disabled={inProgress || attempts === 0}
                onClick={() => {
                    setInProgress(true);
                    setAttempts(attempts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>
            <p>{attempts}</p>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setInProgress(false);
                }}
            >
                Stop Quiz
            </Button>
        </div>
    );
}
