import React from "react";
import { useKeyBoard } 
from "../hooks/useKeyBoard";
export const KeyBoardComponent = () => {
    const [KeyState, setKeyState] = useKeyBoard();
    const handlerClick = (key) => {
    const newState = KeyState.map((item) => {
        if (key === item.key) {
            item.state = true;
        }
        return item;
    });
    setKeyState(newState);
    };
    return (
        <div className="flex-container">
            {KeyState.map(({ key, state }) => (
                <ItemKeyComponent
                    key={key}
                    mykey={key}
                    state={state}
                    handlerClick={handlerClick}
                />
            ))}
        </div>
    );
};