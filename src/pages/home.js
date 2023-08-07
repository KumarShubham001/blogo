import BlogList from './../components/blog/blog-list/blogList';

const blogArr = [
    {
        title: "First blog",
        text: "This is my first blog",
        createdDate: new Date(),
        lastModifiedDate: new Date(),
        public: true,
        keywords: ['blog']
    },
    {
        title: "First blog",
        text: "This is my first blog",
        createdDate: new Date(),
        lastModifiedDate: new Date(),
        public: true,
        keywords: ['blog']
    }
]

const Home = () => (
    <BlogList blogs={blogArr} />
)

export default Home;