Ext.define('ime.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'username', type: 'auto'},
			{name: 'password', type: 'auto'},
			{name: 'nombre', type: 'auto'}
        ]			
    }
});