
import Button from "../Buttons/Button";

const HeroSection = () => {
    return (
        <div className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between overflow-hidden container mx-auto px-4 py-12 gap-10">

            <div className="relative z-10 text-center md:text-left max-w-2xl flex flex-col items-center md:items-start md:w-1/2">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-semibold tracking-wide">
                    Introducing Open Verse 1.0
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primaryText mb-6 tracking-tight">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentHover">Open Verse</span>
                </h1>
                <p className="text-lg md:text-xl text-secondaryText mb-10 max-w-xl leading-relaxed">
                    Discover a universe of knowledge. The most modern, sleek, and open platform for sharing ideas, reading blogs, and connecting with the community.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button to="/signup" variant="primary" size="lg">
                        Get Started For Free
                    </Button>
                    <Button to="/about" variant="outline" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>

            <div className="relative z-10 w-full md:w-[40%] flex justify-center mt-12 md:mt-0 relative group">
                <img
                    src="/images/heroImage.png"
                    alt="Open Verse Hero"
                    className="w-full max-w-lg lg:max-w-xl rounded-bl-[4rem] rounded-tr-[4rem] object-contain drop-shadow-2xl block dark:hidden transform group-hover:scale-[1.02] transition-transform duration-700 relative z-10"
                />
                <img
                    src="/images/darkHeroImage.png"
                    alt="Open Verse Hero"
                    className="w-full max-w-lg lg:max-w-xl object-contain drop-shadow-2xl hidden rounded-tr-[4rem] rounded-bl-[4rem]  dark:block transform group-hover:scale-[1.02] transition-transform duration-700 relative z-10"
                />


            </div>
        </div>
    );
};

export default HeroSection;
