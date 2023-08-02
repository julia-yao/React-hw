import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('max');
    const [isPending, setisPending] = useState('false');
    const history =  useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault(); //禁止按鈕動作後刷新頁面
        const blog = { title, body, author };

        setisPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {'Content-Type':'application/json'}, //告訴瀏覽器資料類型
            body: JSON.stringify(blog), 
        }).then(()=>{
            history.push('/');
            
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="max">max</option>
                    <option value="tsuda">tsuda</option>
                </select>
                <button>Add blog</button>
                 
            </form>
        </div>
     );
}
 
export default Create;