import Ember from 'ember';
import WidgetApplication from 'ember-eureka/widget-application';

export default WidgetApplication.extend({

    menuItems: function() {

        var currentRouteName = this.get('currentRouteName');

        var items = this.get('config.items');
        if (!items)  {

            items = Ember.A();
            var models = this.get('currentController.appConfig.structure.models');

            var item, isActive, dasherizedModelType;
            Ember.keys(models).forEach(function(modelType) {

                // if the model has no view, skip it
                if (!Ember.get(models, modelType+'.views.collection.index')) {
                    return;
                }

                dasherizedModelType = modelType.dasherize();
                isActive = currentRouteName.split('.')[1] === dasherizedModelType;

                item = Ember.Object.create({
                    label: modelType,
                    route: 'eureka.'+dasherizedModelType,
                    isActive: isActive
                });

                items.pushObject(item);
            });

        } else {
            items = items.map(function(item) {
                item.isActive = currentRouteName === item.route;
                return item;
            });
        }

        return items;
    }.property('config.items.[]', 'currentRouteName')
});
