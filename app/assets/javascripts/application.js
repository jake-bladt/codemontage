// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .
var APP = APP || {};

APP = {
  common: {
    init: function() {
			// $(document).foundationTopBar();
			// $(document).foundationTopBar();
    }
  },
  home: {
    init: function() {

    },
    index: function() {

		},
    dashboard: function() {
			$("form.button_to")
				.bind("ajax:beforeSend", function(e, xhr) {
					$(e.target).parent("span.registration").html('<i class="general foundicon-checkmark"></i> Registered');
				});
    }
  },
  projects: {
		index: function() {
			$("form.button_to")
				.bind("ajax:beforeSend", function(e, xhr) {
					$(e.target).parent("span.favorite").html('<a href="/dashboard"><i class="fi-star"></i></a>');
				});
		}
	}
}
UTIL = {
  exec : function(controller, action){
    var ns = APP,
    action = (action === undefined) ? "init" : action;

    if (controller !== "" &&
      ns[controller] &&
      typeof ns[controller][action] === "function" ) {
      ns[controller][action]();
    }
  },
  init: function() {
    var body = document.body,
    controller = body.getAttribute("data-controller"),
    action = body.getAttribute("data-action");
    UTIL.exec("common");
    UTIL.exec(controller);
    UTIL.exec(controller, action);
  }
};

//document.observe("dom:loaded", UTIL.init); //prototype
$(document).ready(UTIL.init); //jquery
$(function(){ $(document).foundation(); });

$(document).foundation();
