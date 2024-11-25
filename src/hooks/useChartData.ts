import { useDashboardDataQuery } from 'services/dashboardApi';
import { getDataFormatForChart, getTodaysFullDate, subtractDays } from 'utils/dateFunctions';

export default function useChartData() {
    const { data: dashboardData } = useDashboardDataQuery();

    const fullDate = getTodaysFullDate();

    const result = subtractDays(fullDate.toString(), 6);

    const allData = dashboardData?.dayWiseEmployerRegistration?.filter((item: any) => new Date(item.day) >= new Date(result));
    const data = getDataFormatForChart(allData);
    return { data, dashboardData };
}
