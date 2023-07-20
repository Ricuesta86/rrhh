export class EmpleadoAlreadyExist extends Error{
    constructor() {
        super('Empleado already exist')
    }
}