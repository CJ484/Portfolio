import avatar from '../../assets/avatar.png';
import './index.style.scss';
const Home = () => {
    return (
        <div className='home'>
            <img src={avatar} alt="avatar"/>
            <div className='title'>
                <h1>Carlos Coreas</h1>
                <h2>Portfolio Page</h2>
            </div>
        </div>
    );
}

export default Home;