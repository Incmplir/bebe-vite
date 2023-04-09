import React, { useState } from "react";
import bebeComponent from "./common/bebeComponent";

import "./App.css";
import Test from "./common/bebeComponent";

function App() {
    const [showBebe, setShowBebe] = useState(false);

    const handleButtonClick = () => {
        setShowBebe(true);
    };

    return (
        <>
            <div className="App">
                <div
                    className={`flex flex-col justify-center w-screen h-screen bg-black ${
                        showBebe ? "" : "items-center"
                    }`}
                >
                    {!showBebe && (
                        <button
                            className="button bg-black border  border-white hover:bg-white hover:text-black transition-all text-white font-bold py-2 px-4 rounded "
                            onClick={handleButtonClick}
                        >
                            Pulsame
                        </button>
                    )}
                    {showBebe && (
                        <Test
                            video="../src/assets/babysFight.mp4"
                            audio="../src/assets/babySolo.mp3"
                            gif="../src/assets/babyDancing.gif"
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
