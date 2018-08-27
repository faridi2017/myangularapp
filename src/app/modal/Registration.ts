import { Role } from "./Role";
import { Project } from "./project";

export class Registration {
    userName: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    companyId: number;
    accessFailedCount: number;
    email: string;
    firstName: string;
    lastName: string;
    roleId: string;
    projectName: string;
    role: Role;
    project: Project;
    createdDateTime: Date;
    assignedUsers: string;
    twoFactorEnabled: boolean;
    securityStamp: string;
    phoneNumberConfirmed: boolean;
    lockoutEndDateUtc: Date;
    lockoutEnabled: boolean;
    id: string;
    emailConfirmed: boolean;
    projectId: number;
    token: string;

    }
    /*
   {
        "userName": "9123334053",
        "password": "123",
        "confirmPassword": "true",
        "companyId": 1,
        "accessFailedCount": 1,
        "email": "vedagya19@gmail.com",
        "emailConfirmed": false,
        "id": "81F1EFE7-1BCD-4B52-9740-4FC179F388DE",
        "lockoutEnabled": false,
        "lockoutEndDateUtc": null,
        "phoneNumber": "9971234053",
        "phoneNumberConfirmed": false,
        "securityStamp": "",
        "twoFactorEnabled": false,
        "assignedUsers": null,
        "firstName": "Vedagya",
        "lastName": "Bhardwaj",
        "createdDateTime": "2018-07-13T05:40:52.097",
        "role": {
            "roleID": "5",
            "name": "Admin"
        },
     
        "roleId": null,
        "projectId": 0
    }

    */