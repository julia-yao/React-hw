import{ useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body:'loredmmv mlmoe dmo...', author:'mario',id:1},
        {title: 'Welcome party', body:'loredmmv mlmoe dmo...', author:'yoshi',id:2},
        {title: 'Web dev top tips', body:'loredmmv mlmoe dmo...', author:'wolf',id:3},
    ]);

    
     
    return (   
        <div className="Home">
           <BlogList blogs={blogs} title = 'All blogs!' />
           
        </div>
     );
}
 
export default Home;