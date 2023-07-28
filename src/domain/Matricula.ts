import { Estudiante } from "./Estudiante";

export class Matricula {
    matId?: BigInt;
    matTipo?: string;
    matFecha?: string;
    matEliminado?: boolean;
    estudiante?: Estudiante;
}