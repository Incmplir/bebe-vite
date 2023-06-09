import React from 'react';

const bebeComponent = ({video, audio, gif}) => {
    return (
        <div>
             <section className="bg-fixed bg-[center_top_1rem] bg-[length:100px_100px] bg-[url('../src/assets/babyDancing.gif')] flex flex-col items-center h-screen justify-center">
                <audio
                    /* controls */
                    loop={true}
                    preload="auto"
                    // src="https://github.com/Incmplir/bebe-vite/blob/main/src/assets/babySolo.mp3?raw=true"
                    src={audio}
                    autoPlay={true}
                ></audio>
                <video
                    className="w-7/12"
                    loop={true}
                    // src="https://github.com/Incmplir/bebe-vite/blob/main/src/assets/babysFight.mp4?raw=true"
                    src={video}
                    muted
                    autoPlay={true}
                ></video>
                {/* <p className="text-white/50">LLevas {contador} segundos.</p> */}
            </section>
        </div>
    );
}

export default bebeComponent;
