export interface IFavoriteUser {
    favorite_id: number
    favorite_name: string
    favorite_firstname: string
}

export class FavoriteUser {
    public favorite_id: number
    public favorite_name: string
    public favorite_firstname: string

    constructor(data: IFavoriteUser){
        this.fromData(data)
    }

    fromData(data: IFavoriteUser) {
        this.favorite_id = data.favorite_id || null
        this.favorite_name = data.favorite_name || ''
        this.favorite_firstname = data.favorite_firstname || ''
    }
}