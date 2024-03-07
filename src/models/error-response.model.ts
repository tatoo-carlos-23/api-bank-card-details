import { IErrorResponse } from "../interfaces/error-response.interface";

export class ErrorResponse {
    private code: string = "CODE-GENERIC";
    private message: string = "Ocurrio un error";
    private description!: string;

    public get getCode(): string {
        return this.code
    }

    public get getMessage(): string {
        return this.message
    }

    public setCode(code: string): this {
        this.code = code
        return this
    }

    public setMessage(message: string): this {
        this.message = message
        return this
    }

    public setDescription(description: string): this {
        this.description = description
        return this
    }

    public build(): IErrorResponse {
        const res: IErrorResponse = {
            code: this.code,
            message: this.message
        };

        if (this.description) {
            res.description = this.description;
        }
        
        return res;
    }

}