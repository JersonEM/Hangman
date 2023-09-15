import React from "react";
import { KeyBoardComponent } 
from "./components/KeyBoardComponent";
import "./styles.css";
import { DrawComponent } 
from "./components/DrawComponents";
export const HangManComponent = () => {
    return (
        <div>
            <h1>HangMan</h1>
            <hr />
            <DrawComponent/>
            <KeyBoardComponent/>
        </div>
    );
};