import { useState, useEffect } from "react";

const bebeComponent = () => {
/*     const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContador((contador) => contador + 1);
        }, 1000);

        // Se debe limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalo);
    }, []); // El arreglo vacío como segundo parámetro indica que solo se debe ejecutar una vez al montar el componente */
    return (
        <>
            <section className="bg-fixed bg-[center_top_1rem] bg-[length:100px_100px] bg-[url('../src/assets/babyDancing.gif')] flex flex-col items-center h-screen justify-center w-screen">
                <audio
                    /* controls */
                    loop={true}
                    preload="auto"
                    src="../src/assets/babySolo.mp3"
                    autoPlay={true}
                ></audio>
                <video
                    className="w-7/12"
                    loop={true}
                    src="../src/assets/babysFight.mp4"
                    muted
                    autoPlay={true}
                ></video>
                {/* <p className="text-white/50">LLevas {contador} segundos.</p> */}
            </section>
        </>
    );
};

export default bebeComponent;
