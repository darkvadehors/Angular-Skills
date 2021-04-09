export interface IPublication {
    publication_userId:number,
    publication_id:number,
    publication_name: string
    publication_firstname: string
    publication_title: string,
    publication_text:string,
    publication_date: Date
}

export class Publication {
    public publication_userId:number
    public publication_id:number
    public publication_name: string
    public publication_firstname: string
    public publication_title: string
    public publication_text:string
    public publication_date: Date

    constructor(data: IPublication){
        this.fromData(data)
    }

    public fromData(data:IPublication){
        this.publication_userId = data.publication_userId || null
        this.publication_id = data.publication_id || null
        this.publication_name = data.publication_name || ''
        this.publication_firstname = data.publication_firstname || ''
        this.publication_title = data.publication_title || ''
        this.publication_text = data.publication_text || ''
        this.publication_date = data.publication_date || null
    }
}