Ext.define("ime.view.LoginForm", {
    extend: 'Ext.form.Panel',
	xtype: 'loginform',
	title: 'Login',		
	iconCls: 'user',				
	layout: 'vbox',                				
    requires: ['Ext.TitleBar', 'Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Password', 'Ext.List'],
	
    config: {
		url: 'http://localhost:8080/rest/user/login/',
		method: 'POST',	
		fullscreen: true,
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
				text: 'Send',
				ui: 'confirm',
				formBind: true,	 
				id:'doLogin',
				action: 'doLogin'
			}			
		]
	}
});