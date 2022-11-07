import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyActivity from './MyActivity';

const MyActivities = () => {
    const { user } = useContext(AuthContext);

    const [myActivities, setMyActivities] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myActivities?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyActivities(data));
    }, [user?.email]);

    return (
        <div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    myActivities.map(myActivity => <MyActivity
                        key={myActivity._id}
                        myActivity={myActivity}></MyActivity>)
                }
            </div>
        </div>
    );
};

export default MyActivities;