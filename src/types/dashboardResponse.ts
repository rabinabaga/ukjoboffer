export interface DashboardResponse {
    totalEmployee: number;
    totalJobSeeker: number;
    dayWiseEmployerRegistration: { count: number; day: string }[];
}
