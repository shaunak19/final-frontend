export interface User{
    userName:string,
    userEmail:string,
    dob:Date,
    paddress:string,
    taddress:string,
    password:string,
    confirmPassword: string
}

export interface LoginUser{
    name:string,
    paswword:string
}

export interface loan{
    userName:string,
    userEmail:string,
    dob:Date,
    paddress:string,
    taddress:string,
    type:string,
    iRate:string,
    paymentPeriod:Number,
    Adate:Date,
    lamnt:Number,
    emi:string,
    approved:string
}

export interface LoginResponse {
    message:string,
    token:string
}