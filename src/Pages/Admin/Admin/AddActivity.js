import React from 'react';

const AddActivity = () => {
    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 text-center capitalize dark:text-white">Add Charity Activity</h2>

            <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-2/4 mx-auto mt-4">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="title">Enter Title</label>
                        <input id="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="eventDate">Event Date</label>
                        <input id="eventDate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className='col-span-2'>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="description">Description</label>
                        <textarea id="description" type="text" className="col-span-2 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
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