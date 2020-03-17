export class produtoAPI{
    public idProduct?:number; 
    public name?: string;
    public description?: string;
    public image?: string; 
    public group?: {
        groupCode?: number,
        description?: string
    };
    public vlProduct?: number;
    public vlProductFull?: number
}