export interface ILoginUser{
    email: string,
    password: string,
    returnSecureToken: boolean
}

export interface IAccountRes{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: string
}

export interface ISignUpUser{
    fname: string;
    lname: string;
    email: string;
    contact: number;
    username: string;
    password: string;
    branch: string;
    role: 'HOD' | 'staff';
    returnSecureToken: boolean;
}