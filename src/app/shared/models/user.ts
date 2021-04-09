export interface IUser {
    createAt: Date
    email: string
    firstname: string
    lastConnect: Date
    name: string
    token: string
    userId: number
}


export class User {
    public createAt: Date
    public email: string
    public firstname: string
    public lastConnect: Date
    public name: string
    public token: string
    public userId: number

    constructor(data: IUser){
        this.fromData(data)
    }

    private fromData(data: IUser){
        this.createAt = data.createAt || null
        this.email = data.email || ''
        this.firstname = data.firstname || ''
        this.lastConnect = data.lastConnect || null
        this.name = data.name || ''
        this.token = data.token || ''
        this.userId = data.userId || null
    }
}