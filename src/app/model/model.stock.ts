export class Stock {
    public order_id: number;
    public date: string;
    public m_reading: number;
    public e_reading: number;
    public purchase_qty: number;
    public remaining_qty: number;

    constructor() {
        this.order_id = 0;
        this.date = '';
        this.m_reading = 0;
        this.e_reading = 0;
        this.purchase_qty = 0;
        this.remaining_qty = 0;
    }

}
