import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Activity = ({ activity }) => {
    const { user, logOut } = useContext(AuthContext);
    const { _id, title, banner, date } = activity;

    const navigate = useNavigate();

    const handleAddMyActivity = () => {
        const myActivity = {
            activityId: _id,
            email: user?.email,
            title,
            banner,
            date,
        }
        fetch('https://we-charity-foundation-server.vercel.app/myActivities', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('we-token')}`,
            },
            body: JSON.stringify(myActivity),
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
                if (data.acknowledged) {
                    toast.success('Added the activity in your profile');
                }
            })
    }

    return (
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">

                </p>
            </div>

            <img className="object-cover w-full h-48 mt-2" src={banner} alt={title} />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">{date}</h1>
                <button onClick={handleAddMyActivity} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Going</button>
            </div>
        </div>
    );
};

export default Activity;