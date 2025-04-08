export default function AvatarBubble({ image, isActive, onClick }) {
    return (
        <img
            src={image}
            onClick={onClick}
            className={`rounded-full object-cover cursor-pointer shadow-lg transition-all duration-500
                ${isActive ? "ring-4 ring-blue-500 w-24 h-24 z-30" : "w-16 h-16 z-20  grayscale hover:grayscale-0"}
            `}
            alt="avatar"
        />
    );
}
