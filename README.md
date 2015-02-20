# Eureka-widget-application-menu

A menu for Eureka's applications. Usage:

    {
        application: {
            name: <application name>
            views: {
                widgets: [
                    {
                        type: 'application-menu',
                        columns: 3,
                        // if `items` is `auto`, display all
                        // pods that has the view: `collection.index`
                        items: [
                            {
                                // the displayed name of the menu item
                                label: 'My dear users',
                                // the route to target
                                route: 'eureka.user.collection.index'
                            }
                        ]
                    },
                    {
                        type: 'outlet',
                        columns: 9,
                    }
                ]
            }
        }
    }

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
