import './Index.css';
import { useState, useEffect } from 'react';
import Announce from '../../components/Announce/Announce';

const Login = () => {
    
    const [announces, setAnnounces] = useState<any>();

    useEffect(() => {
        fetch('http://localhost:3333/api/announcement/all')
            .then(res => res.json())
            .then(data => setAnnounces(data))
    }, []);
    
    return (
        <div className={'index'}>
            <h1>All the announces</h1>
            <div className={'announces'}>
                {announces?.map((announce: any) => 
                    <Announce title={announce.title} description={announce.description} author={announce.author} />
                )}
            </div>
        </div>
    );
};

export default Login;