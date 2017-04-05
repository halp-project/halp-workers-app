export class Order {
    id: number;
    type: string;
    title: string;
    addressee: string;
    room: number;
    timeAgo: number;
    state: string;
    image: string;

    constructor(
        id: number,
        type: string,
        title: string,
        addressee: string,
        room: number,
        timeAgo: number,
        state: string,
        image: string
    ){}
}