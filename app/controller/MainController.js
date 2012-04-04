Ext.define('ime.controller.MainController', {
    extend: 'Ext.app.Controller',
	
    config: {
        refs: {  
			mainPanel: 'mainpanel'
        },
        control: {
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('ime.controller.Main Initialized');
    },
	
	index: function(){
		// TODO check if view exists
		ime.view.Main = new ime.view.Main();		

	}
	
	
});