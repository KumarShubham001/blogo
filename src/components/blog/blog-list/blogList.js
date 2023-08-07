import BlogListItem from './../blog-list-item/BlogListItem'

const BlogList = (props) => {
    return (
        <>
            <h2>Available Blogs:</h2>
            {
                props.blogs.map(blog => <BlogListItem key={blog.createdDate} blog={blog} />)
            }
        </>
    );
}

export default BlogList;