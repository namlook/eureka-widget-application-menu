import Ember from 'ember';
import WidgetApplication from 'ember-eureka/widget-application';

export default WidgetApplication.extend({

    menuItems: function() {

        var currentRouteName = this.get('currentRouteName');

        var items = this.get('config.items') || 'auto';
        if (items === 'auto')  {

            items = Ember.A();
            var resources = this.get('eurekaConfig.resources');

            var item, isActive, dasherizedModelType;
            Ember.keys(resources).forEach(function(resource) {

                // if the model has no view, skip it
                if (!Ember.get(resources, resource+'.views')) {
                    return;
                }

                dasherizedModelType = resource.dasherize();
                isActive = currentRouteName.split('.')[1] === dasherizedModelType;

                item = Ember.Object.create({
                    label: resource,
                    route: 'eureka.'+dasherizedModelType,
                    isActive: isActive
                });

                items.pushObject(item);
            });

        } else {
            items = items.map(function(item) {
                Ember.set(item, 'isActive', currentRouteName === item.route);
                return item;
            });
        }

        return items;
    }.property('config.items.[]', 'currentRouteName')
});
