Ext.define("ime.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Password'],
    
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',        
        items: [
            {				
				title: 'Login',		
				iconCls: 'user',
				xtype: 'formpanel',				
				layout: 'vbox',                				
				url: 'http://localhost:8080/rest/user/login/',
				method: 'POST',

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
                            handler: function(btn, event) {							
								var myForm = btn.up('formpanel');							
								
                                myForm.submit({
									waitTitle:'Connecting', 
									waitMsg:'Sending data...',
									success: function() {
										Ext.Msg.alert('Form Values', JSON.stringify(myForm.getValues(), null, 2))
									},
									failure: function(form, action) {																														
										obj = Ext.JSON.decode(action.responseText); 
										Ext.Msg.alert('Login Failed!', obj.message); 
										
									}
								});
								
							}
                        }
                    ]				
                
            }
        ]
    }
});