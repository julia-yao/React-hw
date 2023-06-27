import{ useState } from 'react';

const Home = () => {
    
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState('20');
    //透過第二個參數 傳入新資料
    const handleClick = () =>{
        setName('Lucy');
        setAge('29');
        
    }

    
     
    return (   
        <div className="Home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old.</p>
            <button onClick={handleClick}>click me</button>
           
        </div>
     );
}
 
export default Home;