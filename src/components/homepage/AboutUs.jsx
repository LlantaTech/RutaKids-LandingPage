import { useEffect, useRef, useState } from "react";
import AvatarBubble from "../ui/AvatarBubble";
import gsap from "gsap";

const team = [
    {
        name: "Lucía Torres",
        role: "CEO",
        bio: "Apasionada por la educación, lidera RutaKids desde sus raíces.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        videoTimestamp: 5,
    },
    {
        name: "Marco Ríos",
        role: "Tech Lead",
        bio: "Desarrollador fullstack y gurú de sistemas escalables.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        videoTimestamp: 15,
    },
    {
        name: "Camila Herrera",
        role: "Diseño UI/UX",
        bio: "Hace que RutaKids luzca y se sienta increíble.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        videoTimestamp: 25,
    },
    {
        name: "Luis Fernández",
        role: "Frontend Dev",
        bio: "React lover y optimizador de interfaces.",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        videoTimestamp: 35,
    },
    {
        name: "Ana Velarde",
        role: "Marketing",
        bio: "Conecta RutaKids con los colegios del país.",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
        videoTimestamp: 45,
    },
];

export default function AboutUs() {
    const [order, setOrder] = useState(team);
    const [active, setActive] = useState(team[0]);
    const [player, setPlayer] = useState(null);
    const sectionRef = useRef(null);

    // Load YouTube API
    useEffect(() => {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            const ytPlayer = new window.YT.Player("team-video", {
                events: {
                    onReady: () => setPlayer(ytPlayer),
                },
            });
        };
    }, []);

    // Play/pause on visibility
    useEffect(() => {
        if (!player) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) player.playVideo();
                else player.pauseVideo();
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [player]);


    useEffect(() => {
        if (!player) return;
        const interval = setInterval(() => {
            const time = player.getCurrentTime();
            const next = [...team].reverse().find((m) => time >= m.videoTimestamp);
            if (next && next.name !== active.name) {

                const idx = order.findIndex((m) => m.name === next.name);
                const newOrder = [...order.slice(idx), ...order.slice(0, idx)];
                setOrder(newOrder);
                setActive(order[idx]);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [player, active]);


    const updateActive = (name) => {
        const idx = order.findIndex((m) => m.name === name);
        const newOrder = [...order.slice(idx), ...order.slice(0, idx)];
        setOrder(newOrder);
        setActive(order[idx]);
        if (player) {
            player.seekTo(order[idx].videoTimestamp, true);
        }
    };

    const radius = 180; // más lejos del centro
    const centerX = 210;
    const centerY = 175;

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 md:px-20 bg-white"
            id="#about-us">
            <h2 className="text-4xl font-bold text-center mb-12">
                Conoce al equipo detrás de <span className="text-blue-600">RutaKids</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
                {/* VIDEO */}
                <div className="w-full md:w-2/3 max-w-xl">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            id="team-video"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/mco3UX9SqDA?enablejsapi=1&version=3"
                            title="RutaKids Team"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* CÍRCULO */}
                <div className="relative w-[400px] h-[400px]">
                    {/* Círculo central */}
                    <div   className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2
             rounded-full bg-blue-50 flex flex-col justify-center items-center
             text-center shadow-lg z-0" >
                        <p className="font-semibold text-black text-lg">{active.name}</p>
                        <p className="text-blue-600 text-sm">{active.role}</p>
                        <p className="text-gray-600 text-xs mt-2 px-4">{active.bio}</p>
                    </div>

                    {/* Avatares en media luna */}
                    {order.map((member, idx) => {
                        const stepAngle = Math.PI / (order.length - 1);
                        const angle = stepAngle * idx - Math.PI / 2;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={member.name}
                                style={{
                                    transform: `translate(${centerX + x}px, ${centerY + y}px)`,
                                }}
                                className="absolute transition-all duration-700"
                            >
                                <AvatarBubble
                                    image={member.image}
                                    isActive={member.name === active.name}
                                    onClick={() => updateActive(member.name)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
