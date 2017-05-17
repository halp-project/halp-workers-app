export class Order {
    id: number;
    type: string;
    title: string;
    addressee: string;
    room: number;
    date: Date;
    state: string;
    image: string;

    constructor(
        id: number,
        type: string,
        title: string,
        addressee: string,
        room: number,
        date: Date,
        state: string,
        image: string
    ){}

    getTimeAgo() : number{
        let millis = this.date.getTime();
        let now = new Date().getTime();
        
        console.log("ID: "+ this.id + ", time: " +((now-millis)/1000)/60);
        
        return ((now-millis)/1000)/60;
    }
}