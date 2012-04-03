Ext.define('ime.controller.TablaController', {
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
		
		ime.view.Tabla = new ime.view.Tabla();							
		ime.store.Users = new ime.store.Users();		
		// And set the active item in the view		
		ime.view.Main.setActiveItem('usuarioslist', { type: 'cube', direction: 'right' });
		console.log('ime.controller.TablaController.index() called');
	}
	
});