import React, { useEffect, useState } from 'react';
import Header from './header';
import CardCreate from './cardCreate';
import axios from 'axios';

const Cover = () => {
    const [data, setData] = useState([]);
    const [checker, setChecker] = useState(0);
    const [col, setCol] = useState(true);
    const [item, setItem] = useState({
        arther: '',
        link: ''
    });

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?page=1&limit=6')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCardClick = () => (
        setChecker(1)
    );

    const Remove = () => {
        setChecker(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, item]);
        setChecker(0); 
        setItem({ arther: '', link: '' }); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className='cover'>
            <div className='coverlft'>
                <div className='logo'>
                    <img src='/images/logo.PNG' style={{ width: '100%', borderBottom: "0.3px solid grey", paddingBottom: "10%",cursor:'pointer' }} onClick={()=>{setCol(!col)}}/>
                </div>
                <div className='lftCol' style={col===true?{marginLeft:'0',transition:'0.5s'}:{marginLeft:'-250px',transition:'0.5s'}}>
                    <div className='colTop'>
                        <h3 style={{color: "rgb(250, 120, 47)"}}><i class="fa-solid fa-database" style={{paddingRight:'10%',paddingTop:'10%'}}></i>My Projects</h3>
                        <h3 style={{  borderBottom: "0.3px solid grey", paddingBottom: "10%" }}><i class="fa-solid fa-table-cells-large" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Sample Projects</h3>
                        <h3><i class="fa-brands fa-adn" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Apps</h3>
                        <h3><i class="fa-solid fa-circle-play" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Intro to Necleo</h3>
                    </div>
                    <div className='colBottom'>
                        <h3><i class="fa-solid fa-circle-question" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Help and Support</h3>
                        <h3><i class="fa-solid fa-comment-dots" style={{paddingRight:'10%',paddingTop:'10%'}}></i>Feedback</h3>
                        <h3><i class="fa-solid fa-circle-arrow-left" style={{paddingRight:'10%',paddingTop:'10%'}} onClick={()=>setCol(!col)}></i>Collapse</h3>
                    </div>
                </div>
            </div>
            <div className='coverrft'>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    {checker === 1 &&
                        <div className="form-popup" id="myForm">
                            <form onSubmit={handleSubmit} className="form-container">
                                <h1>Add a Post</h1>
                                <label htmlFor="arther"><b>Arther Name</b></label>
                                <input type="text" placeholder="John Allen" name="arther" value={item.arther} onChange={handleChange} required />
                                <label htmlFor="link"><b>Image Link</b></label>
                                <input type="text" placeholder="www.link.com" name="link" value={item.link} onChange={handleChange} required />
                                <button type="submit" className="btn">Submit</button>
                                <button type="button" className="btn cancel" onClick={Remove}>Close</button>
                            </form>
                        </div>
                    }
                    <h1>My Projects</h1>
                    <div className='cards'>
                        <CardCreate url="/images/new.PNG" Arther="Add New" styler={{ cursor: "pointer" }} click={handleCardClick} />
                        {data.map((item) => (
                            <CardCreate key={item.id} url={item.url} Arther={item.author} width={item.width} height={item.height} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
