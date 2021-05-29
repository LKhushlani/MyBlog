const BlogList = ( { blogs, title,   }) => {   // decomposigng props in  parenthesis
    //  2 ways to know 
    // const BlogList = (props) => {
        // const blogs = props.blogs;
console.log(blogs);
    return (  
        <div className='blog-list'>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> { blog.title }</h2>
                    <p>Written by { blog.author } </p>
                    {/* <button onClick={ () => handleDelete(blog.id)}>Delete Blog </button> */}

                </div>
      
            ))}
        </div>


        
    );
}
 
export default BlogList;