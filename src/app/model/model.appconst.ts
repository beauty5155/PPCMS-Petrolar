export class AppConst {

    // public static dateBeFormat: string = 'YYYY-MM-dd';
    // public static dateFeFormat: string = 'MM/dd/YYYY';
    // public static displayDTFormat: string = 'MM/dd/YYYY h:mm a';
    // public static zone: string = 'en-US';
    // public static zoneUTC: string = 'en-UTC';

    // public static dateExchangeFormat: string = 'YYYY-MM-dd h:mm:ss';

    public str_len_6: number = 6;
    public str_len_8: number = 8;
    public str_len_10: number = 10;
    public str_len_11: number = 11;
    public str_len_12: number = 12;
    public str_len_15: number = 15;
    public str_len_25: number = 25;
    public str_len_100: number = 100;
    public str_len_500: number = 500;

    public num_len_3: number = 3;
    public num_len_11: number = 5;
    public num_len_10: number = 10;


    public name_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public name_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public name_msg_required: string = 'Please enter Name';
    public name_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public s_rate_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public s_rate_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public s_rate_msg_required: string = 'Please enter Sold Rate';
    public s_rate_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public s_qty_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public s_qty_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public s_qty_msg_required: string = 'Please enter Sold Quantity';
    public s_qty_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public b_rate_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public b_rate_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public b_rate_msg_required: string = 'Please enter Bought Rate';
    public b_rate_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public date_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public date_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public date_msg_required: string = 'Please enter Date';
    public date_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public b_qty_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public b_qty_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public b_qty_msg_required: string = 'Please enter Bought Quantity';
    public b_qty_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public address_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public address_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public address_msg_required: string = 'Please enter Address';
    public address_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public max_value_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public max_value_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public max_value_msg_required: string = 'Please enter Max value';
    public max_value_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public balance_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public balance_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public balance_msg_required: string = 'Please enter Balance';
    public balance_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public password_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public password_msg_pattern: string = 'Should have 1 uppercase, 1 lowercase, 1 number and 1 special character';
    public password_msg_required: string = 'Please enter Password';
    public password_msg_minlen: string = 'Atleast 8 characters required';
    public password_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public joining_date_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public joining_date_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public joining_date_msg_required: string = 'Please enter Joining Date';
    public joining_date_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public paid_amount_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public paid_amount_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public paid_amount_msg_required: string = 'Please enter Paid Amount';
    public paid_amount_msg_maxlen: string = 'Exceeds the maximum allowed length';

    // public cid_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    // public cid_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public cid_msg_required: string = 'Please enter Customer ID';
    // public cid_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public m_reading_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public m_reading_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public m_reading_msg_required: string = 'Please enter Morning Reading';
    public m_reading_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public remaining_qty_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public remaining_qty_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public remaining_qty_msg_required: string = 'Please enter Remaining Quantity';
    public remaining_qty_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public balance_amount_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public balance_amount_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public balance_amount_msg_required: string = 'Please enter Balance Amount';
    public balance_amount_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public quantity_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public quantity_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public quantity_msg_required: string = 'Please enter Quantity';
    public quantity_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public total_amount_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public total_amount_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public total_amount_msg_required: string = 'Please enter Total Amount';
    public total_amount_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public rate_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public rate_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public rate_msg_required: string = 'Please enter Rate';
    public rate_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public e_reading_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public e_reading_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public e_reading_msg_required: string = 'Please enter Evening Reading';
    public e_reading_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public purchase_qty_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public purchase_qty_msg_pattern: string = 'Only alphanumeric - _ # () {} / and . are allowed';
    public purchase_qty_msg_required: string = 'Please enter Purchase Qty';
    public purchase_qty_msg_maxlen: string = 'Exceeds the maximum allowed length';

    public phone_pattern: string = '^[0-9]*$';
    public phone_msg_pattern: string = 'Only numbers are allowed';
    public phone_msg_required: string = 'Please enter Phone';
    public phone_msg_maxlen: string = 'Exceeds the maximum allowed length';

    // public pwd_pattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$';
    public pwd_pattern: string = '^([a-zA-Z0-9-_#(){}/. ])*$';
    public pwd_msg_pattern: string = 'Should have 1 uppercase, 1 lowercase, 1 number and 1 special character';
    public pwd_msg_required: string = 'Please enter Password';
    public pwd_msg_minlen: string = 'Atleast 8 characters required';
    public pwd_msg_maxlen: string = 'Exceeds the maximum allowed length';



}
