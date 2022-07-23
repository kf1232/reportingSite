import './OverviewReport.css';

import { Line, Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const max = 1000
const min = 0

const Baroptions = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Bar Chart',
		},
	},
};

const Baroptions2 = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Bar Chart',
		},
	},
};

const Lineoptions = {
	responsive: true,
	maintainAspectRatio: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
	labels,
	datasets: [
		{
			label: 'Desktop',
			data: labels.map(() => Math.floor(Math.random() * (max - min) + min)),
			borderColor: 'rgb(255, 255, 132)',
			backgroundColor: 'rgba(255, 255, 132, 0.5)',
		},
		{
			label: 'Mobile',
			data: labels.map(() => Math.floor(Math.random() * (max - min) + min)),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
	],
};

function OverviewReport() {
	return (
		<>
			<div className='mainTable'>
			<Line options={Lineoptions} data={data}/>
				</div>
			<div className='leftTable'>
				<Bar options={Baroptions} data={data}/>
			</div>
			<div className='rightTable'>
				<Bar options={Baroptions2} data={data}/>
			</div>
		</>
	)
};

export default OverviewReport