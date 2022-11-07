import React, { useEffect, useState } from 'react';
import Activity from '../../Admin/Activities/Activity';

const Home = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);

    const [count, setCount] = useState([]);
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch(`https://we-charity-foundation-server.vercel.app/activities?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setActivities(data.activities);
                setCount(data.count);
            })
    }, [page, size])

    const pages = Math.ceil(count / size);

    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 gap-y-10'>
                {
                    activities.map(activity => <Activity
                        key={activity._id}
                        activity={activity}></Activity>)
                }
            </div>
            {/* pagination */}
            <div className="flex justify-center my-10">
                {
                    [...Array(pages).keys()].map(number =>
                        <button onClick={() => setPage(number)} className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">{number + 1}</button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15" selected>15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>
        </div>
    );
};

export default Home;