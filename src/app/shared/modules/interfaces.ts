export interface ILoginUser{
    email: string,
    password: string
}

export interface IAccountRes{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered: string
}