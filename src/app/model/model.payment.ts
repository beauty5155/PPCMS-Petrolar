export class Payment {
    public  pid: number;
    public cid: number;
    public date: string;
    public paid_amount: number;

    constructor() {
        this.pid = 0;
        this.cid = 0;
        this.date = '';
        this.paid_amount = 0;
    }

}
