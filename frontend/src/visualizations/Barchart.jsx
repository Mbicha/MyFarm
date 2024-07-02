import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const data = {
    daily: [
        { name: 'Mon', sales: 400 },
        { name: 'Tue', sales: 300 },
        { name: 'Wed', sales: 500 },
        { name: 'Thu', sales: 200 },
        { name: 'Fri', sales: 278 },
        { name: 'Sat', sales: 189 },
        { name: 'Sun', sales: 239 },
    ],
    weekly: [
        { name: 'Week 1', sales: 1400 },
        { name: 'Week 2', sales: 1500 },
        { name: 'Week 3', sales: 1300 },
        { name: 'Week 4', sales: 1600 },
    ],
    monthly: [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 5000 },
        { name: 'Apr', sales: 4000 },
        { name: 'May', sales: 6000 },
        { name: 'Jun', sales: 7000 },
        { name: 'Jul', sales: 8000 },
        { name: 'Aug', sales: 5000 },
        { name: 'Sep', sales: 4000 },
        { name: 'Oct', sales: 6000 },
        { name: 'Nov', sales: 7000 },
        { name: 'Dec', sales: 8000 },
    ],
    quarterly: [
        { name: 'Q1', sales: 12000 },
        { name: 'Q2', sales: 15000 },
        { name: 'Q3', sales: 18000 },
        { name: 'Q4', sales: 20000 },
    ],
    halfYearly: [
        { name: 'H1', sales: 30000 },
        { name: 'H2', sales: 40000 },
    ],
    yearly: [
        { name: '2023', sales: 70000 },
        { name: '2024', sales: 80000 },
    ],
};

export default class Barchart extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            timePeriod: 'daily',
            chartData: this.getChartData(data, 'daily'),
            options: this.getOptions('daily'),
        }
    }

    getChartData(data, period) {
        return{
            labels: data[period].map(sale => sale.name),
            datasets: [
                {
                    label: "Sales",
                    data: data[period].map(sale => sale.sales),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }
            ]
        }
    }

    // Chart Options
    getOptions(period){
        return{
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: `${period} Sales`
                }
            }
        }
    }

    // Handle Period Change
    handlePeriodChange = (data, period) => {
        this.setState({
            timePeriod: period,
            chartData: this.getChartData(data, period),
            options: this.getOptions(period)
        })
    }
    render() {
        const { options, chartData } = this.state;
        return(
            <>
                <div className="flex flex-col items-center mb-4 border p-1 bg-white sm:flex-row sm:justify-between">
                    <button 
                        className="flex justify-center m-1 bg-yellow-500 text-green-800 w-4/5 p-1 rounded-md sm:w-2/12"
                        onClick={() => this.handlePeriodChange(data, 'daily')}>
                            Daily
                    </button>
                    <button 
                        className="flex justify-center m-1 bg-yellow-500 text-green-800 w-4/5 p-1 rounded-md sm:w-2/12"
                        onClick={() => this.handlePeriodChange(data, 'monthly')}>
                            Monthly
                    </button>
                    <button 
                        className="flex justify-center m-1 bg-yellow-500 text-green-800 w-4/5 p-1 rounded-md sm:w-2/12"
                        onClick={() => this.handlePeriodChange(data, 'yearly')}>
                            Yearly
                    </button>        
                    
                </div>
                <div className="flex flex-col align-middle bg-white w-full h-96">
                    <Bar data={chartData} options={options} />
                </div>  
            </>
        )
    }
}
