Ext.define('ime.controller.LoginController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginForm: 'loginform'
        },
        control: {
            'loginform button': {
                tap: 'doLogin'
            }            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('ime.controller.LoginController Initialized');
    },
	
	doLogin: function() {
        var loginForm   = this.getLoginForm();
		loginForm.submit({
						waitTitle:'Loggin in...', 
						waitMsg:'Sending data...',
						success: function() {
							Ext.Msg.alert('Form Values', JSON.stringify(loginForm.getValues(), null, 2))
						},
						failure: function(form, action) {																														
							obj = Ext.JSON.decode(action.responseText); 
							Ext.Msg.alert('Login Failed!', obj.message); 
							
						}
					});		
    }		
});