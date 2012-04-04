Ext.define("ime.view.LoginForm", {
    extend: 'Ext.form.Panel',
	xtype: 'loginform',
	title: 'Login',		
	iconCls: 'user',				
	layout: 'vbox',                				
    requires: ['Ext.TitleBar', 'Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Password', 'Ext.List'],
	
    config: {
		fullscreen: true,
		masked: {				
			message: 'Loggin in..',
			xtype: 'loadmask',
			hidden: true
		},								

		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Login'
			},
			{
				xtype: 'fieldset',
				title: 'Login',                            
				items: [
					{
						xtype: 'textfield',
						name:  'username',
						label: 'Username'
					},
					{
						xtype: 'passwordfield',
						name:  'password',
						label: 'Password'
					},
				]
			},
			{
				xtype: 'button',
				text: 'Login',
				ui: 'confirm',
				formBind: true,	 
				id:'doLogin',
				action: 'doLogin'
			}			
		]
	}
});