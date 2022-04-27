
export interface ICustomer{
	id:number;
	name:string;
}

export interface IOrder{
	image: string;
	orderNo:number;
	orderDate:Date;
	customer:ICustomer;
	price:number;
	pay:string;
	orderPayStatus:string;
	items:string;
	payMethod:string;
	tags:string;
}

export interface IColumns{
	  Header: string;
	  column: string;
  	accessor:string;
}