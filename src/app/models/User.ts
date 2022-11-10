class User{
    private id: number
    private email: string;
    private firstName: string;
    private lastName: string;
    private dateOfBirth: string;
    private taxCode: string;
    private password: string;


    constructor() {
        this.id = 0;
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.dateOfBirth = "";
        this.taxCode = "";
        this.password = "";
    }

    public getId(): number {
        return this.id;
    }

    public getEmail(): string {
        return this.email;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getDateOfBirth(): string {
        return this.dateOfBirth;
    }

    public getTaxCode(): string {
        return this.taxCode;
    }

    public getPassword(): string {
        return this.password;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public setDateOfBirth(dateOfBirth: string): void {
        this.dateOfBirth = dateOfBirth;
    } 

    public setTaxCode(taxCode: string): void {
        this.taxCode = taxCode;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public toString(): string {
        return this.id + " " + this.firstName + " " + this.lastName +
            " " + this.dateOfBirth + " " + this.email + " " +
            " " + this.taxCode + " " + this.password;
    }

    public toObject(): Object {
        return {
            "first-name": this.getFirstName(),
            "last-name": this.getLastName(),
            "date-of-birth": this.getDateOfBirth(),
            "email": this.getEmail(),
            "tax-code": this.getTaxCode(),
            "password": this.getPassword()
        }
    }
}

export default User;