import User from "./User";

class UserRegister extends User{
    public password: string;

    constructor(
        id: string,
        password: string,
        email: string,
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        taxCode: string
    ) {
        super(id, email, firstName, lastName, dateOfBirth, taxCode);
        this.password = password;
    }
}
export default UserRegister;