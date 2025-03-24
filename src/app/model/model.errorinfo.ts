import { AppConst } from '../model/model.appconst';

export class ErrorInfo {    
    public refid: number;
    public ec : number;
    public message : string;
    public status_code : number;
    appconst = new AppConst();

    constructor() {
        this.refid = 0;
        this.ec = 0;
        this.message = '';
        this.status_code = 200;
    }

    processCustomError(err:any, operation:string='') {
        this.message = '';
        this.status_code = err.status_code;
        this.ec = err.ec;
        this.refid = err.refid;

        if (this.status_code == 200)
            this.message = '';
        else if (this.status_code == 300 && operation=='')            
            this.message = err.message;
        // else if (this.status_code == 301 || this.status_code == 302)
        //     this.appconst.appAlert(err.message+'\n (Ref: '+err.refid+')');
        // else 
        //     this.appconst.appAlert(err.message+'\n (EC: '+err.ec+',  Ref: '+err.refid+')');
    }

    showSystemError(msg:string) {
        this.message = '';
        // this.appconst.appAlert(msg);
    }
}