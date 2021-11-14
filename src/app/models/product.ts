

export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    constructor(id,name,description='',price=0,imageUrl='https://miro.medium.com/max/1139/1*y3s76yYE-YbajQiHJ8CDqQ.jpeg'){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
    }
}
