/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 MasGetItemSet in the list
// * All 3 MasGetItemSet have at least one GetItemsSet

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
		"itsgrp/OrdensDeVendas/test/integration/MasterJourney",
		"itsgrp/OrdensDeVendas/test/integration/NavigationJourney",
		"itsgrp/OrdensDeVendas/test/integration/NotFoundJourney",
		"itsgrp/OrdensDeVendas/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});