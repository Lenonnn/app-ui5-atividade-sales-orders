/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"itsgrp/OrdensDeVendas/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"itsgrp/OrdensDeVendas/test/integration/pages/App",
	"itsgrp/OrdensDeVendas/test/integration/pages/Browser",
	"itsgrp/OrdensDeVendas/test/integration/pages/Master",
	"itsgrp/OrdensDeVendas/test/integration/pages/Detail",
	"itsgrp/OrdensDeVendas/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "itsgrp.OrdensDeVendas.view."
	});

	sap.ui.require([
		"itsgrp/OrdensDeVendas/test/integration/NavigationJourneyPhone",
		"itsgrp/OrdensDeVendas/test/integration/NotFoundJourneyPhone",
		"itsgrp/OrdensDeVendas/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});