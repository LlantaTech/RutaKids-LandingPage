import { useEffect, useRef, useState } from "react";

export default function TeamSection() {
    const [selectedMember, setSelectedMember] = useState(null);
    const playerRef = useRef(null);
    const sectionRef = useRef(null);
    const [player, setPlayer] = useState(null);

    const team = [
        {
            name: "Lucía Torres",
            role: "CEO",
            bio: "Apasionada por la educación, lidera RutaKids desde sus raíces.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            videoTimestamp: 10,
        },
        {
            name: "Marco Ríos",
            role: "Tech Lead",
            bio: "Desarrollador fullstack y gurú de sistemas escalables.",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            videoTimestamp: 25,
        },
        {
            name: "Camila Herrera",
            role: "Diseño UI/UX",
            bio: "Hace que RutaKids luzca y se sienta increíble.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            videoTimestamp: 40,
        },
        {
            name: "Luis Fernández",
            role: "Frontend Dev",
            bio: "React lover y optimizador de interfaces.",
            image: "https://randomuser.me/api/portraits/men/51.jpg",
            videoTimestamp: 55,
        },
        {
            name: "Ana Velarde",
            role: "Marketing",
            bio: "Conecta RutaKids con los colegios del país.",
            image: "https://randomuser.me/api/portraits/women/48.jpg",
            videoTimestamp: 70,
        },
    ];

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

    useEffect(() => {
        if (!player) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    player.playVideo();
                } else {
                    player.pauseVideo();
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [player]);

    // Mostrar miembro automáticamente en función del tiempo
    useEffect(() => {
        if (!player) return;

        const interval = setInterval(() => {
            const currentTime = player.getCurrentTime();

            const current = [...team]
                .reverse()
                .find((m) => currentTime >= m.videoTimestamp);

            if (current && current.name !== selectedMember?.name) {
                setSelectedMember(current);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [player, selectedMember]);

    const handleSelect = (member) => {
        setSelectedMember(member);
        if (player) {
            player.seekTo(member.videoTimestamp, true);
        }
    };

    return (
        <section
            id="team"
            ref={sectionRef}
            className="bg-white py-24 px-6 md:px-20 w-full"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Conoce al equipo detrás de <span className="text-blue-600">RutaKids</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto items-start">
                {/* VIDEO */}
                <div className="w-full md:w-2/3">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            id="team-video"
                            ref={playerRef}
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

                {/* INFO PANEL */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                        {team.map((member, idx) => (
                            <img
                                key={idx}
                                src={member.image}
                                alt={member.name}
                                className={`rounded-full w-20 h-20 cursor-pointer border-2 ${
                                    selectedMember?.name === member.name
                                        ? "border-blue-600 scale-110"
                                        : "border-transparent"
                                } transition-all duration-300`}
                                onClick={() => handleSelect(member)}
                            />
                        ))}
                    </div>

                    {selectedMember && (
                        <div className="mt-4 bg-blue-50 ap-4 rounded-lg shadow text-center">
                            <h3 className="text-xl font-semibold text-gray-800">{selectedMember.name}</h3>
                            <p className="text-blue-600 font-medium">{selectedMember.role}</p>
                            <p className="text-sm text-gray-600 mt-2">{selectedMember.bio}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
