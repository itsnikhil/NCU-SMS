export class Product {
    constructor(
        public id:number,
        public name:string,
        public date:string,
        public category:string,
        public quantity:number,
        public inventory?:number,
        public type?:string,
        public company?:string,
        public desc?:string,
        public img?:string,
        public veg?:string){}
    }