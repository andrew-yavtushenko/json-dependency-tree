(function() {
	var all, dep, deps, tree, key, left, mods, _i, _len, uml, top, count;

	Joint.paper("myfsa", 1600, 4000);
	tree = {"action/action":[],"action/alias":[],"action/authenticate":["action/decorator","registry"],"action/base":["action/process"],"action/binding":["jquery","action/action"],"action/controller":["action/action","action/resolver","action/manager","helpers/message","registry","helpers/util"],"action/decorator":["action/process"],"action/fields":["action/decorator","helpers/util"],"action/hooks":["action/decorator","helpers/bindings"],"action/manager":["action/action","action/authenticate","action/fields","action/runtimes","action/validate","action/targets","action/hooks","action/state","action/base"],"action/process":[],"action/resolver":["jquery","commands/default","config","registry","action/alias","nls/app"],"action/runtimes":["action/decorator","helpers/runtimes"],"action/state":["action/decorator","registry"],"action/targets":["action/decorator","helpers/locate"],"action/validate":["jquery","action/decorator","nls/app","jquery.validate"],"app":["jquery","widgets/controller","request/manager","request/controller"],"binding/iterator":[],"bootstrap":["compat"],"CoffeeScript":[],"commands/command":["jquery"],"commands/default":["commands/command","helpers/message"],"commands/populate":["commands/command","action/action","action/manager","helpers/data","helpers/populate","nls/app","registry"],"commands/set":["commands/command","helpers/runtimes","helpers/dom"],"commands/toggle":["commands/command"],"commands/trigger":["jquery","commands/command","nls/app"],"compat":[],"config":["helpers/singleton"],"cs":["CoffeeScript"],"helpers/application":["jquery","registry","config","nls/app"],"helpers/bindings":["jquery","action/binding","binding/iterator","registry"],"helpers/cookies":["jquery","jquery.cookie","jquery.md5"],"helpers/data":["jquery","registry","config","helpers/storage","helpers/runtimes","nls/app","jquery.md5"],"helpers/dnd":["jquery","action/action","helpers/populate","jquery-ui"],"helpers/guid":[],"helpers/lightbox":["jquery","jquery.colorbox"],"helpers/message":["jquery","nls/app","handlebars"],"helpers/populate":["jquery","helpers/util","helpers/runtimes","helpers/dom","action/action","helpers/view"],"helpers/qs":["helpers/router"],"helpers/router":[],"helpers/singleton":[],"helpers/view":["jquery","registry","config","handlebars"],"registry":["helpers/singleton"],"request/base":["request/process"],"request/capabilities":["request/decorator","modernizr","nls/app"],"request/controller":["request/resolver","helpers/application","registry","nls/app"],"request/decorator":["request/process"],"request/manager":["request/request","request/visit","request/session","request/capabilities","request/querystring","request/base"],"request/process":[],"request/querystring":["jquery","request/decorator","config","helpers/qs","helpers/storage"],"request/request":[],"request/resolver":["jquery","views/default","config"],"request/session":["request/decorator","helpers/cookies","registry","config","nls/app"],"request/visit":["request/decorator","helpers/guid","helpers/cookies","registry"],"views/default":["views/view","helpers/view","helpers/message"],"views/index":["views/view","helpers/view","helpers/message"],"views/view":[],"widgets/aggregate":["widgets/list","widgets/factory","widgets/iterator"],"widgets/controller":["jquery","registry","widgets/subject","widgets/aggregate"],"widgets/factory":["widgets/widget","widgets/widget_1","widgets/widget_2","widgets/widget_8","widgets/widget_9","widgets/widget_14","widgets/widget_22"],"widgets/iterator":["widgets/list"],"widgets/list":[],"widgets/subject":["widgets/list","widgets/iterator"],"widgets/widget":["jquery","action/action","action/manager","action/controller"],"widgets/widget_1":["widgets/widget","helpers/data","helpers/populate","nls/app","helpers/dnd"],"widgets/widget_14":["widgets/widget","helpers/data","helpers/populate","nls/app","helpers/dnd"],"widgets/widget_2":["jquery","widgets/widget","helpers/view","nls/app","helpers/dnd"],"widgets/widget_22":["jquery","widgets/widget","config","helpers/lightbox","helpers/data","nls/app","jquery.colorbox","jquery.uploadify","sprintf"],"widgets/widget_8":["widgets/widget"],"widgets/widget_9":["jquery","widgets/widget","jquery.blockui"],"handlebars":[],"helpers/dom":["jquery","helpers/util","helpers/message","nls/app","action/action","helpers/locate"],"helpers/locate":["jquery","nls/app","helpers/message"],"helpers/runtimes":["jquery","helpers/util","registry","config","helpers/dom","helpers/locate","config","sprintf"],"helpers/storage":["jquery","config","modernizr","jquery.md5"],"helpers/util":["jquery"],"i18n":["module"],"nls/app":[],"jquery":[],"jquery-ui":["jquery"],"jquery.blockui":["jquery"],"jquery.colorbox":["jquery"],"jquery.cookie":["jquery"],"jquery.md5":["jquery"],"jquery.uploadify":["jquery","swfobject"],"jquery.validate":["jquery"],"modernizr":[],"sprintf":[],"swfobject":[]};
	uml = Joint.dia.uml;
	mods = {};
	all = [];
	left = 10;
	top = 20;
	count = 0;

  // Make a uml class object for a key
  function make(key) {
	  if (mods[key] != null) {
		  return;
	  }

    if (count % 10 === 0) {
      top += 70;
      left = 10;
    }

    mods[key] = {
	    cls: uml.Class.create({
	      rect: {
	        x: left,
	        y: top,
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
		    }
		  })
		};

    all.push(mods[key].cls);
		left += 50;
		top += 20;
		count += 1;
  }

  // Create an arrow between two objects
	function connect(key, dep) {
    mods[key].cls.joint(mods[dep].cls, uml.dependencyArrow).register(all);
  }

	// Create the objects
	for (key in tree) {
	  deps = tree[key];
    make(key);
    if (deps.length > 0) {
      for (_i = 0, _len = deps.length; _i < _len; _i++) {
        dep = deps[_i];
        make(dep);
      }
    }
	}

	// Create object relationships
	for (key in tree) {
	  deps = tree[key];
	  if (deps.length > 0) {
		  for (_i = 0, _len = deps.length; _i < _len; _i++) {
		    dep = deps[_i];
        connect(key, dep);
		  }
	  }
	}
})();
