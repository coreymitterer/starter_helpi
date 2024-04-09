import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Pages(): JSX.Element {
    const [isHome, setHome] = useState<boolean>(true);
    const [isBasic, setBasic] = useState<boolean>(false);
    const [isDetailed, setDetailed] = useState<boolean>(false);

    function updateSetHome(): void {
        setHome(true);
        setBasic(false);
        setDetailed(false);
    }

    function updateSetBasic(): void {
        setHome(false);
        setBasic(true);
        setDetailed(false);
    }

    function updateSetDetailed(): void {
        setHome(false);
        setBasic(false);
        setDetailed(true);
    }

    return (
        <div>
            <Button onClick={updateSetHome} disabled={isHome}>Home</Button>
            <Button onClick={updateSetBasic} disabled={isBasic}>Basic</Button>
            <Button onClick={updateSetDetailed} disabled={isDetailed}>Detailed</Button>

            {isHome && (
                <div>
                    <h1>Home</h1>
                    <p>Welcome to the home page!</p>
                    <p>Corey Mitterer</p>
                    <p>Ian Duffy</p>
                    <p>Logan Ponik</p>
                    <p>Junpuyin Wei</p>
                </div>
            )}
            {isBasic && (
                <div>
                    <h1>Basic</h1>
                    <p>Welcome to the basic page!</p>
                </div>
            )}
            {isDetailed && (
                // Put the content of the 'Detailed' page here
                <div>
                    <h1>Detailed</h1>
                    <p>Welcome to the detailed page!</p>
                </div>
            )}
        </div>
    );
}