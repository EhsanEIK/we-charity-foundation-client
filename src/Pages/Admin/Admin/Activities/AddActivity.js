import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddActivity = () => {
    const navigate = useNavigate();

    const handleAddActivity = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const bannerURL = form.bannerURL.value;
        const description = form.description.value;
        const date = form.eventDate.value;

        const activity = { title, date, banner: bannerURL, description };
        fetch('http://localhost:5000/activities', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(activity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Added Activity Successfully');
                    navigate('/');
                    form.reset();
                }
            })
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-2xl font-semibold text-gray-700 text-center capitalize dark:text-white mb-10">Add Charity Activity</h2>

            <form onSubmit={handleAddActivity}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-2/4 mx-auto mt-4">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="title">Enter Title</label>
                        <input id="title" name='title' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="eventDate">Event Date</label>
                        <input id="eventDate" name='eventDate' type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className='col-span-2'>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="bannerURL">Banner URL</label>
                        <input id="bannerURL" name='bannerURL' type="text" className="col-span-2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className='col-span-2'>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="description">Description</label>
                        <textarea id="description" name='description' type="text" className="col-span-2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                    </div>

                    <div className="col-span-2 flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddActivity;