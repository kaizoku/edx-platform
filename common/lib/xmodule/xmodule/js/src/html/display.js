// Once generated by CoffeeScript 1.9.3, but now lives as pure JS
/* eslint-disable */
(function() {
  this.HTMLModule = (function() {
    function HTMLModule(element) {
      this.element = element;
      this.el = $(this.element);
      JavascriptLoader.executeModuleScripts(this.el);
      Collapsible.setCollapsibles(this.el);
      if (typeof MathJax !== "undefined" && MathJax !== null) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el[0]]);
      }
      if (typeof setupFullScreenModal !== "undefined" && setupFullScreenModal !== null) {
        setupFullScreenModal();
      }
    }

    HTMLModule.prototype.$ = function(selector) {
      return $(selector, this.el);
    };

    return HTMLModule;

  })();

}).call(this);
