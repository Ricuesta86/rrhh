export interface iToken {
    generate:(id:string)=>Promise<any>;
    verified:()=>Promise<any>
}