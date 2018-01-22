export class User {
	
	constructor(
	    public barcode: number = null,
	    public id: number = null,
	    public name?: string,
	    public email: string = null,
	    public phone: number = null,
	    public birthday: Date= null,
	    public government_id: number= null,
	    public address: string = null,
	    public mapping_by: string= null,
	    public app_id: string= null,

  	)	{
		
  	}
}
