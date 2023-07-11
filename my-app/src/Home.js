import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      setBlogs(data);

    })
  }, [name])
   //blogs && 邏輯判斷 有條件的輸出模板
  return (
    <div className="home">
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
      
    </div>
  );
}
 
export default Home;