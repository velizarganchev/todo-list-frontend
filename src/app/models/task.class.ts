import { Member } from "./member";
import { Subtask } from "./subtask";

export class Task {
    id: number;
    title: string;
    category: string;
    description: string;
    status: string;
    color: string;
    priority: string;
    members: Member[];
    created_at: string;
    due_date: string;
    checked: boolean;
    subtasks: Subtask[];

    constructor(obj?: any) {
        this.id = obj?.id ?? null;
        this.title = obj?.title ?? '';
        this.category = obj?.category ?? '';
        this.description = obj?.description ?? '';
        this.status = obj?.status ?? '';
        this.color = obj?.color ?? '';
        this.priority = obj?.priority ?? '';
        this.members = obj?.members ? obj.members.map((m: any) => new Member(m)) : [];
        this.created_at = obj?.created_at ?? new Date().toISOString();
        this.due_date = obj?.due_date ?? new Date().toISOString();
        this.checked = obj?.checked ?? false;
        this.subtasks = obj?.subtasks ? obj.subtasks.map((s: any) => new Subtask(s)) : [];
    }

    toJson() {
        return {
            id: this.id,
            title: this.title,
            category: this.category,
            description: this.description,
            status: this.status,
            color: this.color,
            priority: this.priority,
            members: this.members.map(m => m.toJson()),
            created_at: this.created_at,
            due_date: this.due_date,
            checked: this.checked,
            subtasks: this.subtasks.map(s => s.toJson())
        };
    }
}
