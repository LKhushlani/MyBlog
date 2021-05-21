import { useState } from 'react'

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title : 'My New Blog', body : 'lorem .. ipsum', author: 'lavina', id: 1},      
        {title : 'Welcome party', body : 'lorem .. ipsum', author: 'dan brown', id: 2},
        {title : 'Web dev tips', body : 'lorem .. ipsum', author: 'stacy', id: 3}    
        ]);
    return (  
        <div className="home">
{/* loop through the array and generates a template  using JS using map method*/}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.idx}>
                    <h2> { blog.title }</h2>
                    <p>Written by { blog.author } </p>

                </div>
      
            ))}
         
        </div>

    );
}
 
export default Home;