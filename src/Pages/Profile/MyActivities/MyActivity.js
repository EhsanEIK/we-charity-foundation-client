import React from 'react';

const MyActivity = ({ myActivity }) => {
    const { _id, activityId, title, date, banner } = myActivity;

    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 h-full bg-cover">
                <img src={banner} alt={title} />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-sm font-bold text-gray-700 dark:text-gray-200">{date}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-700 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">cancel</button>
                </div>
            </div>
        </div >
    );
};

export default MyActivity;