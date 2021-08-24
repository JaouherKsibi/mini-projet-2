export class ServiceProvider{
    private id:string;
    private storeName:string;
    private storeIdentifier:string;
    private phoneNumber:string;
    private email:string;
    private password:string ;
    private logoUrl:string;
    constructor(storeName:string,storeIdentifier:string,phoneNumber:string,email:string,password:string,logoUrl?:string,id?:string){
        this.id=id;
        this.storeName=storeName;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.password=password;
        this.storeIdentifier=storeIdentifier;
        this.logoUrl=logoUrl;
    }
    getId():string{
        return this.id;
    }
    getStoreName():string{
        return this.storeName;
    }
    getStoreIdentifier():string{
        return this.storeIdentifier;
    }
    getPhoneNumber():string{
        return this.phoneNumber;
    }
    getEmail():string{
        return this.email;
    }
    getPassword():string{
        return this.password;
    }
    getLogoUrl(){
        return this.logoUrl;
    }
    setId(id:string){
        this.id=id;
    }
    setStoreName(storeName:string){
        this.storeName=storeName;
    }
    setStoreIdentifier(storeIdentifier){
        this.storeIdentifier=storeIdentifier;
    }
    setPhoneNumber(phoneNumber:string){
        this.phoneNumber=phoneNumber;
    }
    setEmail(email:string){
        this.email=email;
    }
    setLogoUrl(logoUrl:string){
        this.logoUrl=logoUrl;
    }
}