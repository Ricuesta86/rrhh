export interface iToken {
    generate:(id:string)=>string;
    verified:()=>boolean
}