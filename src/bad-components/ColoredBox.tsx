import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setIndex,
}: {
    setIndex: () => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setIndex();
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ i }: { i: number }): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[i],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const setIndex = () => {
        setColorIndex((1 + colorIndex) % COLORS.length);
    };
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor setIndex={setIndex}></ChangeColor>
                <ColorPreview i={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
