(function() {
	var all, dep, deps, tree, key, left, mods, _i, _len, uml;

	tree = {
	  "action/action": [],
	  "action/alias": [],
	  "action/authenticate": [],
	  "action/base": [],
	  "action/binding": [],
	  "action/controller": [],
	  "action/decorator": [],
	  "action/fields": [],
	  "action/hooks": [],
	  "action/manager": [],
	  "action/process": [],
	  "action/resolver": [],
	  "action/runtimes": [],
	  "action/state": [],
	  "action/targets": [],
	  "action/validate": [],
	  "app": [],
	  "binding/iterator": [],
	  "bootstrap": ["compat"],
	  "CoffeeScript": [],
	  "commands/command": [],
	  "commands/default": [],
	  "commands/populate": [],
	  "commands/set": [],
	  "commands/toggle": [],
	  "commands/trigger": [],
	  "compat": [],
	  "config": [],
	  "cs": ["CoffeeScript"],
	  "helpers/application": ["jquery", "registry", "config", "nls/app"],
	  "helpers/bindings": ["jquery", "action/binding", "binding/iterator", "registry"],
	  "helpers/cookies": ["jquery", "jquery.cookie", "jquery.md5"],
	  "helpers/data": ["jquery", "registry", "config", "helpers/storage", "helpers/runtimes", "nls/app", "jquery.md5"],
	  "helpers/dnd": ["jquery", "action/action", "helpers/populate", "jquery-ui"],
	  "helpers/guid": [],
	  "helpers/lightbox": ["jquery", "jquery.colorbox"],
	  "helpers/message": ["jquery", "nls/app", "handlebars"],
	  "helpers/populate": ["jquery", "helpers/util", "helpers/runtimes", "helpers/dom", "action/action", "helpers/view"],
	  "helpers/qs": ["helpers/router"],
	  "helpers/router": [],
	  "helpers/singleton": [],
	  "helpers/view": ["jquery", "registry", "config", "handlebars"],
	  "registry": ["helpers/singleton"],
	  "request/base": ["request/process"],
	  "request/capabilities": ["request/decorator", "modernizr", "nls/app"],
	  "request/controller": ["request/resolver", "helpers/application", "registry", "nls/app"],
	  "request/decorator": ["request/process"],
	  "request/manager": ["request/request", "request/visit", "request/session", "request/capabilities", "request/querystring", "request/base"],
	  "request/process": [],
	  "request/querystring": ["jquery", "request/decorator", "config", "helpers/qs", "helpers/storage"],
	  "request/request": [],
	  "request/resolver": ["jquery", "views/default", "config"],
	  "request/session": ["request/decorator", "helpers/cookies", "registry", "config", "nls/app"],
	  "request/visit": ["request/decorator", "helpers/guid", "helpers/cookies", "registry"],
	  "views/default": ["views/view", "helpers/view", "helpers/message"],
	  "views/index": ["views/view", "helpers/view", "helpers/message"],
	  "views/view": [],
	  "widgets/aggregate": ["widgets/list", "widgets/factory", "widgets/iterator"],
	  "widgets/controller": ["jquery", "registry", "widgets/subject", "widgets/aggregate"],
	  "widgets/factory": ["widgets/widget", "widgets/widget_1", "widgets/widget_2", "widgets/widget_8", "widgets/widget_9", "widgets/widget_14", "widgets/widget_22"],
	  "widgets/iterator": ["widgets/list"],
	  "widgets/list": [],
	  "widgets/subject": ["widgets/list", "widgets/iterator"],
	  "widgets/widget": ["jquery", "action/action", "action/manager", "action/controller"],
	  "widgets/widget_1": ["widgets/widget", "helpers/data", "helpers/populate", "nls/app", "helpers/dnd"],
	  "widgets/widget_14": ["widgets/widget", "helpers/data", "helpers/populate", "nls/app", "helpers/dnd"],
	  "widgets/widget_2": ["jquery", "widgets/widget", "helpers/view", "nls/app", "helpers/dnd"],
	  "widgets/widget_22": ["jquery", "widgets/widget", "config", "helpers/lightbox", "helpers/data", "nls/app", "jquery.colorbox", "jquery.uploadify", "sprintf"],
	  "widgets/widget_8": ["widgets/widget"],
	  "widgets/widget_9": ["jquery", "widgets/widget", "jquery.blockui"],
	  "handlebars": [],
	  "helpers/dom": ["jquery", "helpers/util", "helpers/message", "nls/app", "action/action", "helpers/locate"],
	  "helpers/locate": ["jquery", "nls/app", "helpers/message"],
	  "helpers/runtimes": ["jquery", "helpers/util", "registry", "config", "helpers/dom", "helpers/locate", "config", "sprintf"],
	  "helpers/storage": ["jquery", "config", "modernizr", "jquery.md5"],
	  "helpers/util": ["jquery"],
	  "i18n": ["module"],
	  "nls/app": [],
	  "jquery": [],
	  "jquery-ui": ["jquery"],
	  "jquery.blockui": ["jquery"],
	  "jquery.colorbox": ["jquery"],
	  "jquery.cookie": ["jquery"],
	  "jquery.md5": ["jquery"],
	  "jquery.uploadify": ["jquery", "swfobject"],
	  "jquery.validate": ["jquery"],
	  "modernizr": [],
	  "sprintf": [],
	  "swfobject": []
	};


	Joint.paper("myfsa", 5000, 800);  /*(id or HTMLElement, width, height)*/
	uml = Joint.dia.uml;
	mods = {};
	all = [];
	left = 10;

	for (key in tree) {
	  deps = tree[key];
	  //if (tree.hashOwnProperty(key)) {
		mods[key] = {
		  cls: uml.Class.create({
		    rect: {
		      x: left,
		      y: 20,
		      width: 100,
		      height: 50
		    },
		    label: key,
		    shadow: true,
		    attrs: {
		      fill: "#ebebeb"
		    },
			labelAttrs: {
			  "font-weight": "bold"
			},
		  })
		};
		all.push(mods[key].cls);
		left += 110;
	  //}
	}

	for (key in tree) {
	  deps = tree[key];
	  if (deps.length > 0) {
		for (_i = 0, _len = deps.length; _i < _len; _i++) {
		  dep = deps[_i];
		  if (mods[dep] != null) {
		    mods[key].cls.joint(mods[dep].cls, uml.dependencyArrow).register(all);
		  }
		}
	  }
	}
})();
