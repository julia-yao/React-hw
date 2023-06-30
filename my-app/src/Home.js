import{ useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body:'loredmmv mlmoe dmo...', author:'mario',id:1},
        {title: 'Welcome party', body:'loredmmv mlmoe dmo...', author:'yoshi',id:2},
        {title: 'Web dev top tips', body:'loredmmv mlmoe dmo...', author:'wolf',id:3},
    ]);
    const [name,setName] = useState('zaozao');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog =>blog.id !== id );
        setBlogs(newBlogs); 
    }
    //刪除物件觸發更新狀態 重新
    useEffect(()=> {
        console.log('use effect ran');
        console.log(name);
    },[name])
    //可以作為參數來觸發
     
    return (   
        <div className="Home">
           <BlogList blogs={blogs} title = 'All blogs!' handleDelete={handleDelete} />
           <button onClick={()=>setName('Liliy')}>change name</button>
           <p>{ name }</p>
        </div>
     );
}
 
export default Home;