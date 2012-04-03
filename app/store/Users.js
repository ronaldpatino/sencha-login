Ext.define('ime.store.Users', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.Rest'],	
    config: {
        model: 'ime.model.User',
		autoLoad:true,
		storeId: 'Users',
		proxy: {
            type: 'rest',
            url: 'http://localhost:8080/rest/api/user',			
			reader: {
                    type: 'json',
                    rootProperty : 'data',
                    totalCount: 'count',
					successProperty: 'success'
                }
        }		
	}
});	