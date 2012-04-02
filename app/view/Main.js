Ext.define('ime.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
	requires: ['ime.view.LoginForm'],
    config: {
        fullscreen: true,
        
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        defaults: {
            scrollable: true
        },

        items: [
            {
                title: 'Login',
                iconCls: 'user',
                xtype : 'loginform'                 
            }
        ]
    }
});