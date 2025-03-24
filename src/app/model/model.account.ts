export class Account {
    public aid: number;
    public date: string;
    public b_qty: number;
    public b_rate: number;
    public b_total: number;
    public s_qty: number;
    public s_rate: number;
    public s_total: number;
    public r_qty: number;
    public profit: number;

    constructor() {
        this.aid = 0;
        this.date = '';
        this.b_qty = 0;
        this.b_rate = 0;
        this.b_total = 0;
        this.s_qty = 0;
        this.s_rate = 0;
        this.s_total = 0;
        this.r_qty = 0;
        this.profit = 0;
    }

}
