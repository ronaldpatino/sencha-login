Ext.define('ime.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainpanel',
	requires: ['ime.view.LoginForm'],
    config: {
        fullscreen: true,
		layout: 'card',
		cardAnimation: 'cube',
        items: [
            {                              
				// reference to the login form view, it is an item of the current view
                xtype : 'loginform'                 
            }
        ]
    }
});