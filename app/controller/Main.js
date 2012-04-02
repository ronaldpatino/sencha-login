Ext.define('ime.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
				
        },
        control: {
            
        }

    },
        
    init: function() {
        this.getView('ime.view.Main').create();
    }
});