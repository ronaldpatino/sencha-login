Ext.define('ime.view.Tabla', {
    extend: 'Ext.List',    
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
				xtype: 'list',
				fullscreen: true,
				requires: ['ime.store.Users'],
				config: {
					grouped: true,
					itemTpl: '{nombre}',
					store: 'Users',
					onItemDisclosure: true
				},
				listeners: {
				
					select: function(view, record) {
						Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
					}
				}				
			}
        ]

	}

});