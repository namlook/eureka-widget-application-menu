import Ember from 'ember';
import WidgetApplication from 'ember-eureka/widget-application';

export default WidgetApplication.extend({
    currentRouteName: Ember.computed.alias('application.currentRouteName'),

    menuItems: function() {
        var items = this.get('config.items');
        if (!items)  {

            var application = this.get('application');
            var modelTypesList = Ember.keys(Ember.get(application.config, 'structure.models'));
            items = Ember.A();
            var currentRouteName = this.get('currentRouteName');
            var item, route, isActive;

            modelTypesList.forEach(function(modelType) {
                route = modelType.dasherize();
                isActive = currentRouteName.split('.')[0] === route;

                item = Ember.Object.create({
                    label: modelType,
                    route: modelType.dasherize(),
                    isActive: isActive
                });

                items.pushObject(item);
            });
        }
        return items;
    }.property('config.items.[]', 'application', 'currentRouteName')
});
