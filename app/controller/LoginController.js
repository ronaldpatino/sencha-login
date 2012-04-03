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
						waitMsg:'Sending data...',						
						success: function(form, result) {
							ime.app.getController('ime.controller.TablaController').index();							
						},
						failure: function(form, action) {																														
							obj = Ext.JSON.decode(action.responseText); 
							Ext.Msg.alert('Login Failed!', obj.message); 
							
						}
					});		
    }	
});