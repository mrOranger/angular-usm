class User {
    public id: string
    public email: string;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public taxCode: string;

    constructor(
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        taxCode: string
    ) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.taxCode = taxCode;
    }
}

export default User;