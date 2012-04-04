Ext.define('ime.view.Tabla', {
    extend: 'Ext.Panel',    
	id: 'usuarioslist',	       
		
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