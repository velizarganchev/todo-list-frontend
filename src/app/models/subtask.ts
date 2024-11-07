import { Task } from "./task.class";

export class Subtask {
    id: number;
    title: string;
    status: string;
    task: Task | null;

    constructor(obj?: any) {
        this.id = obj?.id ?? null;
        this.title = obj?.title ?? '';
        this.status = obj?.status ?? '';
        this.task = obj?.task ?? null;
    }

    // toJson() {
    //     return {
    //         id: this.id,
    //         title: this.title,
    //         status: this.status,
    //     };
    // }
}
