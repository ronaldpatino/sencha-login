Ext.define('ime.view.UsersList', {
    extend: 'Ext.List',
	xtype: 'userslist',
    config: {
		store: 'Users',
		itemTpl: '{username}',		
		items: [{
            title: 'Simple',
            layout:  {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            }
        }]		
    },
	listeners: {
				
		select: function(view, record) {
			Ext.Msg.alert('Selected!', 'You selected ' + record.get('username'));
		}
	}
});
