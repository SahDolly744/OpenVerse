import { Link } from "react-router-dom";

const POPULAR_BLOGS = [
    {
        id: 1,
        title: "The Future of Web Development in 2026",
        excerpt: "Explore the latest trends, frameworks, and paradigms shaping the modern web.",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        author: {
            name: "Alex Rivera",
            avatar: "https://i.pravatar.cc/150?u=alex",
        },
        date: "Apr 20, 2026",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Mastering Modern UI/UX Design",
        excerpt: "A comprehensive guide to creating beautiful, accessible, and user-centric interfaces.",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
        author: {
            name: "Sarah Chen",
            avatar: "https://i.pravatar.cc/150?u=sarah",
        },
        date: "Apr 18, 2026",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Building Scalable Backend Systems",
        excerpt: "Learn how to architecture robust APIs and microservices for global scale.",
        category: "Engineering",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        author: {
            name: "David Kim",
            avatar: "https://i.pravatar.cc/150?u=david",
        },
        date: "Apr 15, 2026",
        readTime: "12 min read"
    }
];

const PopularBlogsSection = () => {
    return (
        <section id="popular-blogs" className="relative w-full container mx-auto p-20">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none z-0 dark:mix-blend-screen"></div>
            <div className="absolute top-1/3 right-10 w-96 h-96 bg-accentHover/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none z-0 dark:mix-blend-screen" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-primaryTextDark text-primaryText mb-4">
                        Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accentHover">Blogs</span>
                    </h2>
                    <p className="dark:text-secondaryTextDark text-secondaryText text-lg max-w-2xl">
                        Dive into our most-read articles and discover insights from top creators around the world.
                    </p>
                </div>
                <Link to="/blogs" className="mt-6 md:mt-0 text-accent font-medium hover:text-accentHover flex items-center gap-2 group transition-colors">
                    View all posts
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {POPULAR_BLOGS.map((blog) => (
                    <div key={blog.id} className="group flex flex-col dark:bg-cardDark bg-card rounded-2xl border border-border overflow-hidden hover:dark:bg-primaryBgDark hover:border-accent hover:shadow-xl transition-all duration-500">
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm dark:text-primaryTextDark text-primaryText text-xs font-semibold rounded-full shadow-sm">
                                    {blog.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold dark:text-primaryTextDark text-primaryText mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                            </h3>
                            <p className="dark:text-secondaryTextDark text-secondaryText text-sm mb-6 line-clamp-3 flex-grow">
                                {blog.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={blog.author.avatar}
                                        alt={blog.author.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-primaryBg"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold dark:text-primaryTextDark text-primaryText">
                                            {blog.author.name}
                                        </p>
                                        <p className="text-xs dark:text-secondaryTextDark text-secondaryText">
                                            {blog.date}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-xs font-medium dark:text-secondaryTextDark text-secondaryText dark:bg-primaryBgDark bg-primaryBg px-2.5 py-1 rounded-md">
                                    {blog.readTime}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularBlogsSection;
