import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
// import { Pie } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);


const Details = ({title}) => {
    const classes = useStyles();
    const { chartData, total } = useTransactions(title);
    // const labels = chartData.labels.map((l) =>{
    //     return <Typography>{l}</Typography>
    // })
    const options = {
        legend: {
      display: true,
      position: "top"
        },
        plugins: {
            display: true
        }
    }

    return (
        <Card className={title === 'Income' ? classes.income: classes.expense}>
            <CardHeader align='center' title={ title } />
            <CardContent>
                <Typography variant="h5" align='center'>{ total }$</Typography>
                {/* {labels} */}
               <Doughnut data={chartData} options={options} />
            </CardContent>
        </Card>
    )
}

export default Details
