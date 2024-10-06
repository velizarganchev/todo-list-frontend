export class Subtask {
    id: number;
    title: string;
    status: string;

    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : null;
        this.title = obj && obj.title ? obj.title : '';
        this.status = obj && obj.status ? obj.status : '';
    }

    toJson() {
        return {
            id: this.id,
            title: this.title,
            status: this.status,
        };
    }
}
