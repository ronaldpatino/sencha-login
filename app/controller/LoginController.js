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
		loginForm.setMasked(true);		
		loginForm.submit({						
			url: 'http://10.1.102.67:8080/rest/user/login/',
			method: 'POST',	
			success: function(form, result) {
				ime.app.getController('ime.controller.UserController').index();							
			},
			
			failure: function(form, action) {																														
				obj = Ext.JSON.decode(action.responseText); 
				Ext.Msg.alert('Login Failed!', obj.message); 
				
			}
		});		
		loginForm.setMasked(false);	
    }	
});