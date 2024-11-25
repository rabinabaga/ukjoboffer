export interface DashboardResponse{
    totalEmployee:number;
    totalJobseeker:number;
    dayWiseEmployerRegistration:{count:number, day:string}[]
}