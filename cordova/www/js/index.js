var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
    window.setTimeout(function() {
      $cordovaSplashscreen.hide();
    }, 500);
  }
};

app.initialize();
