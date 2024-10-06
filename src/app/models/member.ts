export class Member {
    id: number;
    username: string;
    email: string;

    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : null;
        this.username = obj && obj.username ? obj.username : '';
        this.email = obj && obj.email ? obj.email : '';
    }

    toJson() {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
        };
    }
}
