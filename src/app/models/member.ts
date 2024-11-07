export class Member {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    color: string;

    constructor(obj?: any) {
        this.id = obj && obj.id ? obj.id : null;
        this.first_name = obj && obj.firstName ? obj.firstName : '';
        this.last_name = obj && obj.lastName ? obj.lastName : '';
        this.email = obj && obj.email ? obj.email : '';
        this.phone_number = obj && obj.phoneNumber ? obj.phoneNumber : '';
        this.color = obj && obj.color ? obj.color : '';
    }

    // toJson() {
    //     return {
    //         id: this.id,
    //         firstName: this.firstName,
    //         lastName: this.firstName,
    //         email: this.email,
    //         phoneNumber: this.phoneNumber,
    //     };
    // }
}
