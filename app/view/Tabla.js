Ext.define('ime.view.Tabla', {
    extend: 'Ext.Panel',
    xtype: 'tablalist',
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
			/*
			{
				xtype: 'list',
				itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
			},*/
		    {            
				html: '<h2>Users List</h2> <p>This ough to show the users list.</p>',
            }
        ]

	}

});