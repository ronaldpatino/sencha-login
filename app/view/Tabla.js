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

				store: {
					fields: ['name'],
					data: [
						{name: 'Cowper'},
						{name: 'Everett'},
						{name: 'University'},
						{name: 'Forest'}
					]
				},

				itemTpl: '{name}',

				listeners: {
					select: function(view, record) {
						Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
					}
				}				
			}
        ]

	}

});