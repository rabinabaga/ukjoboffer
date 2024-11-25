import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// types
import { ThemeMode } from 'types/config';

// chart data
import chartData from './chart-data/total-growth-bar-chart';
import { useDashboardDataQuery } from 'services/dashboardApi';
import useChartData from 'hooks/useChartData';

const status = [
    {
        value: 'week',
        label: 'This Week'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

interface TotalGrowthBarChartProps {
    isLoading: boolean;
}

const TotalGrowthBarChart = ({ isLoading }: TotalGrowthBarChartProps) => {
    const [value, setValue] = React.useState('today');
    const theme = useTheme();
    const { mode } = useConfig();
    const { data: dashboardData } = useDashboardDataQuery();
    const { data } = useChartData();
    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const divider = theme.palette.divider;
    const grey500 = theme.palette.grey[500];

    const primary200 = theme.palette.primary[200];
    const primaryDark = theme.palette.primary.dark;
    const secondaryMain = theme.palette.secondary.main;
    const secondaryLight = theme.palette.secondary.light;

    console.log(data, 'dash');
    const categories = data.map((item: any) => {
        return item.name;
    });
    const employerValues = data.map((item: any) => item.count);
    const xaxis = {
        type: 'category' as 'category',
        categories
    };

    chartData.options = { ...chartData.options, xaxis: xaxis };
    chartData.series = [{ name: 'New Employers', data: employerValues }];
    React.useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                min: 0, // Set the minimum value for the y-axis
                max: 10, // Set the maximum value for the y-axis
                tickAmount: 5,
                labels: {
                    formatter: (value: any) => Math.round(value),
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: { borderColor: divider },
            tooltip: { theme: mode },
            legend: { labels: { colors: grey500 } }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [mode, primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, divider, isLoading, grey500]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    {/* <Grid container direction="column" spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle2">Total Growth</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h3">$2,324.00</Typography>
                                        </Grid>
                                    </Grid> */}
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                '& .apexcharts-menu.apexcharts-menu-open': {
                                    bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'background.paper'
                                }
                            }}
                        >
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};

export default TotalGrowthBarChart;
