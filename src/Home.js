import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending , setIsPending] = useState(true);
    const [error, setError] = useState(null);


    // const [name, setName] = useState('mario');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( (blog) => blog.id != id );
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogss')
        .then( res => {
            if (!res.ok){
                throw Error('Could not fetch data from resource');
            }
            return res.json();
        })
        .then( data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch( err => {
            setIsPending(false);
            setError(err.message);
        })
    }, []);
    
    return (  
        <div className="home">
            { error && <div> {error} </div> }
            { isPending && <div> Loading....</div> }
          
            {/* loop through the array and generates a template  using JS using map method*/}
            <h2> All Blogs</h2>
             { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'lavina')} title="Filtered Blogs"/>   */}
            {/* props used here props passed here from parent to child component */}
            {/* <button onClick={ () => setName('luigi')}>Change Name</button> */}
            {/* <p> { name }</p> */}

        </div>

    );
}
 
export default Home;