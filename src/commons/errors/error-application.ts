export class ErrorApplication {
    messages: string[];
    status: number;
    constructor(erros: string[], status: number = 501) {
        this.messages = erros;
        this.status = status;
    }
}