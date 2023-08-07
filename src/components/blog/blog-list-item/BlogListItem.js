const BlogListItem = (props) => {
    const {blog} = props;
    return (
        <>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
            <span>Created on: {new Date(blog.createdDate).toLocaleString()}</span>
        </>
    );
}

export default BlogListItem;