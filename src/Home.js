import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title : 'My New Blog', body : 'lorem .. ipsum', author: 'lavina', id: 1},      
        {title : 'Welcome party', body : 'lorem .. ipsum', author: 'dan brown', id: 2},
        {title : 'Web dev tips', body : 'lorem .. ipsum', author: 'stacy', id: 3}    
        ]);
    return (  
        <div className="home">
{/* loop through the array and generates a template  using JS using map method*/}
            <BlogList blogs={blogs}/> 
         {/* props used here props passed here from parent to child component */}
        </div>

    );
}
 
export default Home;