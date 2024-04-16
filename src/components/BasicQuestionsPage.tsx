import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../index.css";
import Survey from "./Survey";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



export function BasicQuestionsPage(): JSX.Element {
    const [responseBasic1, setResponse1] = useState<string>("");
    const [responseBasic2, setResponse2] = useState<string>("");
    const [responseBasic3, setResponse3] = useState<string>("");
    const [responseBasic4, setResponse4] = useState<string>("");
    const [responseBasic5, setResponse5] = useState<string>("");
    const [responseBasic6, setResponse6] = useState<string>("");
    const [responseBasic7, setResponse7] = useState<string>("");
    
    return (<div>Hello World!</div>);
}