export interface iToken {
    generate:(id:string)=>string;
    verified:(jwt:string)=>boolean
}