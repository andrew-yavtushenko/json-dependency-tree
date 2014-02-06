(function() {
	var all, dep, deps, tree, key, left, mods, _i, _len, uml, top, count;

	Joint.paper("myfsa", 1600, 4000);
	tree = {
    'Item': [],
    'Cache': [],
    'TranscodableItem': [],
    'JavaHttpClient': [],
    'MediaTypeFactory': [
      'apiSwitcher.apis',
      'NoopFoldersAdapter',
      'NoopPrivateMediaAdapter',
      'Urls',
      'Item',
      'TranscodableItem'
    ],
    'Conductor': ['MediaTypeFactory'],
    'Urls': [],
    'NoopFoldersAdapter': [],
    'NoopPrivateMediaAdapter': [],
    'OwnMediaAdapter': ['MediaTypeFactory'],
    'NoopPublicMediaAdapter': [],
    'UploadAdapter': ['MediaTypeFactory'],
    'Folder': [],
    'ItemFromStaticResponse': ['MediaTypeFactory'],
    'Aviary': [
      'UploadsFileCollection',
      'i18n'
    ],
    'GetUploadsFileHandlers': [],
    'UploadsFile': [
      'GetUploadsFileHandlers',
      'HttpErrorInterceptor'
    ],
    'ItemRepository': [
      'OwnMediaAdapter',
      'Timer',
      'OOPEventNotifier'
    ],
    'FolderRepository': [
      'OwnMediaAdapter',
      'Timer',
      'OOPEventNotifier'
    ],
    'moveItems': ['OwnMediaAdapter'],
    'addFolder': [
      'OwnMediaAdapter',
      'OOPEventNotifier'
    ],
    'renameFolder': [
      'OwnMediaAdapter',
      'CloseUploadGuard'
    ],
    'removeFolder': [
      'OwnMediaAdapter',
      'OOPEventNotifier'
    ],
    'removeItem': ['OwnMediaAdapter'],
    'removeItemCollection': ['removeItem'],
    'removeFolderWithItems': [
      'ItemRepository',
      'removeFolder',
      'removeItem',
      'CloseUploadGuard'
    ],
    'chooseItem': [
      'SendsItemsToProtocol',
      'OOPEventNotifier'
    ],
    'SelectedItemsFactory': [],
    'SelectedItems': ['SelectedItemsFactory'],
    'AllItemsSelection': ['SelectedItems'],
    'FilesToUpload': [
      'UploadsFileCollection',
      'FlashUploader',
      'generateUUID'
    ],
    'DndHelper': [],
    'notifyAndReject': [],
    'generateUUID': [],
    'generateUploadSessionId': [],
    'UploadsFileCollection': [
      'UploadAdapter',
      'MediaTypeFactory',
      'ItemFromStaticResponse',
      'allSettled',
      'generateUploadSessionId',
      'OOPEventNotifier',
      'Settings'
    ],
    'ProtocolItemMapper': [],
    'SendsItemsToProtocol': [
      'Protocol',
      'ProtocolItemMapper'
    ],
    'SendsItemsToProtocol': [
      'Protocol',
      'ProtocolItemMapper'
    ],
    'FeatureDetection': ['Timer'],
    'EventNotifier': ['OOPEventNotifier'],
    'notifyHelpers': [
      'EventNotifier',
      'Timer'
    ],
    'OOPEventNotifier': ['Urls'],
    'ErrorNotifier': ['Urls'],
    'HttpErrorInterceptor': ['ErrorNotifier'],
    'Settings': [
      'MediaTypeFactory',
      'SelectedItemsFactory',
      'Urls',
      'ProtocolItemMapper',
      'Conductor',
      'externalServicesServicesInitializer'
    ],
    'i18n': [],
    'uiNotifier': [],
    'NotificationSubscriber': [
      'uiNotifier',
      'i18n',
      'addFolder',
      'removeFolder',
      'UploadsFileCollection',
      'ItemRepository',
      'FolderRepository'
    ],
    'Protocol': [],
    'BuildsPreview133px': [],
    'CloseUploadGuard': [],
    'VerifyCORSWorks': [
      'Urls',
      'FeatureDetection'
    ],
    'NotifyCriticalFail': [
      'ErrorNotifier',
      'Protocol'
    ],
    'FlashUploader': [
      'i18n',
      'OwnMediaAdapter',
      'OOPEventNotifier'
    ],
    'StaticPublicMediaAdapter': [
      'Urls',
      'MediaTypeFactory'
    ],
    'StaticPublicMediaRepository': [
      'StaticPublicMediaAdapter',
      'notifyAndReject'
    ],
    'ApiPublicMediaRepository': [
      'Urls',
      'Settings',
      'MediaTypeFactory',
      'i18n',
      'OOPEventNotifier'
    ],
    'allSettled': [
      'UrlLocator',
      'renameItem',
      'OwnMediaAdapter',
      'notifyAndReject'
    ],
    'GetTranscodedFile': [
      'MediaTypeFactory',
      'Settings'
    ],
    'externalConnection': [],
    'ExternalServicesFactory': [
      'allSettled',
      'Token',
      'externalConnection',
      'MediaTypeFactory',
      'Folder'],
    'initialize': [
      'EventNotifier',
      'NotifyCriticalFail',
      'Protocol',
      'Settings',
      'ErrorNotifier',
      'VerifyCORSWorks',
      'Timer',
      'UrlLocator'
    ],
    'ConductorCtrlRoot': ['Conductor'],
    'ConductorCtrlPublicMedia': ['Conductor'],
    'SettingsCtrl': [
      'Conductor',
      'MediaTypeFactory'
    ],
    'FoldersCtrlEditItem': [
      'Aviary',
      'FolderRepository',
      'renameItem'
    ],
    'FoldersCtrlSelection': ['SelectedItems'],
    'FoldersCtrlUpload': [
      'UploadsFileCollection',
      'BuildsPreview133px',
      'FilesToUpload',
      'i18n',
      'MediaTypeFactory',
      'FlashUploader'
    ],
    'FoldersCtrlShow': [
      'EventNotifier',
      'removeItem',
      'FolderRepository',
      'ItemRepository',
      'SelectedItems',
      'DndHelper',
      'i18n',
      'Protocol',
      'ProtocolItemMapper',
      'FeatureDetection',
      'AllItemsSelection',
      'UploadsFileCollection',
      'FlashUploader',
      'GetTranscodedFile',
      'externalServicesservices',
      'notifyHelpers'
    ],
    'FoldersCtrlRemove': [
      'EventNotifier',
      'removeItem',
      'removeItemCollection',
      'SelectedItems',
      'i18n'
    ],
    'FoldersCtrlUpdate': ['renameItem'],
    'FoldersCtrlRename': [
      'ItemRepository',
      'renameFolder'
    ],
    'FoldersCtrlMove': ['SelectedItems'],
    'FoldersCtrlList': [
      'FolderRepository',
      'removeFolderWithItems',
      'removeFromFolder',
      'moveItems',
      'addFolder',
      'CloseUploadGuard'
    ],
    'FoldersCtrlTranscode': [
      'ItemRepository',
      'GetTranscodedFile'
    ],
    'publicMedia.StaticPublicMediaCtrl.Root': ['EventNotifier', 'Timer', 'StaticPublicMediaRepository', 'SelectedItems', 'Protocol', 'ProtocolItemMapper'],
    'publicMedia.BreadcrumbsDynamicPublicMediaCtrl.Root': ['ApiPublicMediaRepository', 'SelectedItems', 'chooseItem'],
    'publicMedia.DynamicPublicMediaCtrl.Root': ['ApiPublicMediaRepository', 'SelectedItems', 'chooseItem'],
    'NotificationsCtrl': ['uiNotifier'],
    'ProtocolCtrl.Items': ['EventNotifier', 'Protocol', 'SelectedItems', 'ProtocolItemMapper', 'CloseUploadGuard', 'i18n'],
    'ProtocolCtrl.Cancel': ['EventNotifier', 'Protocol', 'CloseUploadGuard'],
    'ProtocolCtrl.Help': ['EventNotifier', 'Protocol']
  }
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
