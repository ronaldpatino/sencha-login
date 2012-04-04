Ext.define('ime.view.Tabla', {
    extend: 'Ext.List',
	id: 'usuarioslist',
    config: {
		store: 'Users',
		itemTpl: '{username}',
		emptyText: 'NO hay',
		items: [{
            title: 'Simple',
            layout:  {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            }
        }]		
    }
});
