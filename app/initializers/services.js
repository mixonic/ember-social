export default {
  name: 'services',
  initialize: function(container, application){
    var facebookPluginComponents = ['facepile', 'like', 'share'];

    facebookPluginComponents.forEach(function(plugin) {
      application.inject('component:facebook-' + plugin, 'loader', 'service:facebook-loader');
    });
  }
};
