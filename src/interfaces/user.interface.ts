export interface IUser {
    id?: number;
    fullName: string;
    email: string;
    password?: string;
    status: "active" | "inactive";
}