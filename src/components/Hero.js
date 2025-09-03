import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profile from "../attached_assets/702A7D00-E92C-481A-AAA6-6532A8828D22 2.JPEG";

const Hero = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <section className="hero">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "transparent" },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" } },
                        modes: { repulse: { distance: 100, duration: 0.4 } },
                    },
                    particles: {
                        color: { value: "#00ffff" },
                        links: { color: "#ff00ff", distance: 150, enable: true },
                        move: { enable: true, speed: 2 },
                        number: { value: 50 },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 5 } },
                    },
                }}
            />
            <h1>Talal Nadeem</h1>
            <h2>FRONTEND DEVELOPER & DEVOPS ENGINEER</h2>
            <div className="profile-image">
                <img src={profile} alt="Talal Nadeem" />
            </div>
        </section>
    );
};

export default Hero;

