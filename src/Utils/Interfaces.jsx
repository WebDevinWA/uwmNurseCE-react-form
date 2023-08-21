export type IUserType = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export type IRequestType = {
    RegID: string;
    courseTitle: string;
    vendor: string;
    location: string;
};



export interface IChildProps {
    user: IUserType;
}

export interface ICourseType {    
    title: string;
    vendor: string;
    location: number;
    startDate: DateTime;
    endDate: DateTime;
    notes: string;

}