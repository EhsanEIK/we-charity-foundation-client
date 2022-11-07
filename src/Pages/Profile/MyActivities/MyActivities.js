import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyActivity from './MyActivity';

const MyActivities = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const [myActivities, setMyActivities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myActivities?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('we-token')}`,
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                        .then(() => navigate('/signin'))
                        .catch(err => console.error(err));
                }
                return res.json();
            })
            .then(data => setMyActivities(data));
    }, [user?.email]);

    const handleDeleteMyActivity = (id, title) => {
        const agree = window.confirm("Are you sure to cancel this?");
        if (agree) {
            fetch(`http://localhost:5000/myActivities/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('we-token')}`,
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        return logOut()
                            .then(() => navigate('/signin'))
                            .catch(err => console.error(err));
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`Cancel ${title} event successfully and removed from your activities`);
                        const remainingMyActivities = myActivities.filter(activity => activity._id !== id);
                        setMyActivities(remainingMyActivities);
                    }
                })
        }
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    myActivities.map(myActivity => <MyActivity
                        key={myActivity._id}
                        myActivity={myActivity}
                        handleDeleteMyActivity={handleDeleteMyActivity}></MyActivity>)
                }
            </div>
        </div>
    );
};

export default MyActivities;