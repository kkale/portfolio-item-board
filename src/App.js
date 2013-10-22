Ext.define('CustomApp', { extend: 'Rally.app.App', componentCls: 'app',

    launch: function() {
        console.log(this.context.getDataContext());
        var addNewConfig = {
            xtype: 'rallyaddnew',
            recordTypes: ['PortfolioItem/Feature', 'PortfolioItem/Initiative', 'PortfolioItem/Theme'],
            ignoredRequiredFields: ['Name', 'Project'],
            showAddWithDetails: false,
        };

        this.addNew = this.add(addNewConfig);
        var myCardConfig = {
               xtype: 'rallycard',
               fields: ['State','Parent','c_CustomDropDown'], 
               maxHeight: 100
            }
        var cardBoardConfig = {
            xtype: 'rallycardboard',
            types: ['PortfolioItem/Feature', 'PortfolioItem/Initiative', 'PortfolioItem/Theme'],
            //attribute: 'InvestmentCategory', 
            attribute: 'c_CustomDropDown', //columns are based on a custom field c_CustomDropDown
            cardConfig: myCardConfig
        };
        
        this.cardBoard = this.add(cardBoardConfig);
    }
});