export class Sales {
    public sid: number;
    public cid: number;
    public bill_no: number;
    public date: string;
    public rate: number;
    public quantity: number;
    public total_amount: number;
    public paid_amount: number;
    public balance_amount: number;

    constructor() {
        this.sid = 0;
        this.cid = 0;
        this.bill_no = 0;
        this.date = '';
        this.rate = 0;
        this.quantity = 0;
        this.total_amount = 0;
        this.paid_amount = 0;
        this.balance_amount = 0;
    }

}
