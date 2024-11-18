import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Fetch data from gadgets.json
        fetch('/gadgets.json')
            .then(response => response.json())
            .then(data => {
                // Prepare data for the chart
                const formattedData = data.map(item => ({
                    name: item.product_name,
                    Price: item.price,
                    Rating: item.rating,
                }));
                setChartData(formattedData);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="bg-gray-100">
            <header className="bg-purple-700 text-white text-center py-8 shadow-lg mb-6 space-y-3 w=full">
                <h2 className="text-3xl font-bold text-white pb-2">Statistics</h2>
                <p className="text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </header>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Statistics</h3>
                {chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Price" fill="#9C27B0" />
                            <Bar dataKey="Rating" fill="#FF5252" />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <p>Loading chart data...</p>
                )}
            </div>
        </div>
    );
};

export default Statistics;
