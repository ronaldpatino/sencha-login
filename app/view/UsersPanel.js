Ext.define('ime.view.UsersPanel', {
    extend: 'Ext.Panel',    
	id: 'userspanel',	       
		
	config: {
        fullscreen: true,
		layout: 'card',		
        items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Mon App'
			},
			
			{
				xtype: 'userslist',
			}
        ]

	}

});