import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({ setValue }: { setValue: () => void }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue();
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setValue }: { setValue: () => void }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue();
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => {
        setDhValue(dhValue * 2);
    };
    const half = () => {
        setDhValue(dhValue / 2);
    };
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={double}></Doubler>
            <Halver setValue={half}></Halver>
        </div>
    );
}
