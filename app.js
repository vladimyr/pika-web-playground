import Backbone from '/web_modules/backbone.js';

const HelloWorld = Backbone.View.extend({
  render() {
    this.$el.append('<p>Hello world!</p>');
    return this;
  }
});

const helloWorld = new HelloWorld();
helloWorld.render().$el.appendTo('body');
