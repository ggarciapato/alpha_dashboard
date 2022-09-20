import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from 'moment';
import "chartjs-adapter-moment";

moment().format('YYYY');

// ChartJS.register(...registerables);

function DailyPlot({chartData}) {
    return (
        <div className="DailyPlot">
            <Line
                // type='line'
                data={chartData}
                options={{
                    // maintainAspectRatio: false,
                    scales: {
                        x: {
                            type: 'time', 
                            time: {
                                unit: 'day',
                                // displayFormats: {
                                //     year: 'YYYY'
                                // }
                            }, 
                            ticks: {source: 'auto'}
                        }
                    }
                }}
            />
        </div>
    )
};

export default DailyPlot

