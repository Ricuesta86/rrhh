export interface IEncrypt{
    encrypt:(pass:string)=>Promise<string>
    verified:(pass:string,passHash:string)=>Promise<boolean>
}