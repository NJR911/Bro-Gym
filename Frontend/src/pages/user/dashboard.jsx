import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate()
  const { user } = useAuth();
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
    }, [user, navigate])

    return(
        <>
            <div style={{height:"100vh", background:"#a0a0a0"}}>
                <h1 style={{padding:"100px"}}>Dashboard</h1>

                <div className="user-info">
                    <p>Name: {user?.name}</p>
                    <p>Email: {user?.email}</p>
                </div>
            </div>
        </>
    )
}

