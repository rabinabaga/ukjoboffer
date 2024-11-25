export interface Country {
    _id: string;
    image: string;
    name: string;
    description: string;
    data:any
    createdAt:  string;
}

export interface State {
    _id: string;
    name: string;
    image: string;
    description: string;
    country: StateCountry;
    createdAt: string;
    data:any;
}
interface StateCountry{
    _id: string;
    name: string;
}
export interface Data{
    _id?: string;
    image?: string;
    name: string;
    description?: string;
    createdAt?: Date | string;
}

export interface City {
    _id: string;
    image: string | null | undefined;
    name: string;
    state: CityState;
    description: string;
    createdAt: string;
    data:any;
}

interface CityState {
    _id: string;
    name: string;
}

export interface JobTitle {
    _id: string;
    jobTitle: string;
    minExperience: string;
    description: string;
    jobSpecification: string[];
    skills: Skill[];
    category: Category;
    minAcademinc: string;
    rolesRespon: string[];
    createdAt: string;
    data:any;
}

interface Skill {
    _id: string;
    name: string;
}

interface Category {
    _id: string;
    name: string;
}

export interface JobType {
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    data:any;
}

export interface WorkMode {
    _id: string;
    image: string;
    name: string;
    description: string;
    data:any;
    createdAt: string;
}

export interface Language {
    _id: string;
    image?: string;
    name: string;
    code: string;
    description: string;
    createdAt: string;
    data:any;
}

export interface HotJobFeature {
    _id: string;
    name: string;
    type: string;
    description: string;
    status: boolean;
    createdAt?: Date | string;
    message:string;
    statusCode: number;
    data: any;
}

export interface MainSkill {
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    data:any;
}
