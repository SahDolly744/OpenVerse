
const CircleShape : React.FC<{ position: string, rotation: number , imageUrl : string }> = ({ position = "top-0 left-0 ", rotation  , imageUrl = ''}) => {
    return (
        <div className={`absolute overflow-hidden opacity-50 dark:opacity-30 animate-pulse pointer-events-none z-0 ${position}`}>       
            <img
                src={imageUrl}
                alt="Abstract Shape"
                className={`w-full h-full object-contain rotate-${rotation}`}
            />
        </div>
    );
}

export default CircleShape;