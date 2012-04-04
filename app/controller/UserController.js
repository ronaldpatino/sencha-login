Ext.define('ime.controller.UserController', {
    
	extend: 'Ext.app.Controller',
    
    config: {
        
		
		refs: {
            tablaList: 'tablalist'
        },
        control: {
            
        }
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('Initialized ime.controller.Table');        
    },
	
	index: function() {		
		//Instanciate the view
		
		//Ext.create('ime.store.Users');
		ime.store.Users = new ime.store.Users();	
		ime.view.UsersPanel = new ime.view.UsersPanel();										    
		// And set the active item in the view		
		ime.view.Main.setActiveItem('userspanel', { type: 'cube', direction: 'right' });
		
		console.log('ime.controller.TablaController.index() called');
	}
	
});