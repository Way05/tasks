import React, { useState } from "react";
import { Button } from "react-bootstrap";

const date = ["❤️", "🎏", "🎃", "🪔", "🎄"];
const order = ["🎄", "🪔", "🎏", "🎃", "❤️"];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>(date[0]);
    const moveDate = () => {
        let i = date.indexOf(holiday);
        if (i === date.length - 1) {
            setHoliday(date[0]);
        } else {
            setHoliday(date[i + 1]);
        }
    };
    const moveOrder = () => {
        let i = order.indexOf(holiday);
        if (i === order.length - 1) {
            setHoliday(order[0]);
        } else {
            setHoliday(order[i + 1]);
        }
    };
    return (
        <div>
            Cycle Holiday
            <Button onClick={moveOrder}>Advance By Alphabet</Button>
            <Button onClick={moveDate}>Advance By Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
