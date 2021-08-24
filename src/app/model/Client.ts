export class Client{
    private id:number;
    private firstName:String;
    private lastName:String;
    private identityCardNumber:String;
    private phoneNumber:String;
    private email:String;
    private password:String ;
    private photoUrl:string;

    constructor(firstName:String,lastName:String,phoneNumber:String,email:String,password:String,identityCardNumber:String,photoUrl?:string,id?:number){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.password=password;
        this.identityCardNumber=identityCardNumber;
        this.photoUrl=photoUrl;
    }
    getId():number{
        return this.id;
    }
    getFirstName():String{
        return this.firstName;
    }
    getLastName():String{
        return this.lastName;
    }
    getIdentityCardNumber():String{
        return this.identityCardNumber;
    }
    getPhoneNumber():String{
        return this.phoneNumber;
    }
    getEmail():String{
        return this.email;
    }
    getPassword():String{
        return this.password;
    }
    getPhotoUrl(){
        return this.photoUrl;
    }
    setId(id:number){
        this.id=id;
    }
    setFirstName(firstName:String){
        this.firstName=firstName;
    }
    setLastName(lastName:String){
        this.lastName=lastName;
    }
    setIdentityCardNumber(identityCardNumber){
        this.identityCardNumber=identityCardNumber;
    }
    setPhoneNumber(phoneNumber:String){
        this.phoneNumber=phoneNumber;
    }
    setEmail(email:String){
        this.email=email;
    }
    setPhotoUrl(photoUrl:string){
        this.photoUrl=photoUrl;
    }
}