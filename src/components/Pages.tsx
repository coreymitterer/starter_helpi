import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
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
            <Button onClick={updateSetHome}
            disabled={isHome === true}>Home</Button>
                        <Button onClick={updateSetBasic}
            disabled={isBasic === true}>Basic</Button>
                        <Button onClick={updateSetHome}
            disabled={isDetailed === true}>Detailed</Button>
        </div>
    )
}