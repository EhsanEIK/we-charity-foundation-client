import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Activity from '../../Admin/Admin/Activities/Activity';

const Home = () => {
    const activities = useLoaderData();

    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {
                    activities.map(activity => <Activity
                        key={activity._id}
                        activity={activity}></Activity>)
                }
            </div>
        </div>
    );
};

export default Home;