sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/m/MessageBox",
  "sap/ui/core/routing/Router",
], function(Controller, History, MessageBox, Router) {
  "use strict";

  return Controller.extend("project1.controller.View1", {
    onInit: function() {
      // Initialize your models and view properties here
    },

    movetoview2: function() {
      // Navigate to view 2 logic
      this.getOwnerComponent().getRouter().navTo("RouteView2");

    },

    onRegisterPress: function() {
      // Navigate to view 2 for registration logic
      this.getOwnerComponent().getRouter().navTo("RouteView2");
     
    },

    onLoginPress: function() {
      // Navigate to view 3 for login logic
      this.getOwnerComponent().getRouter().navTo("RouteView3");
    },

    fetchDataFromService: function() {
      var that = this;
      var oModel = this.getOwnerComponent().getModel();
      var aFilters = [new Filter("Ivid", FilterOperator.EQ, "0000000001")];

      oModel.read("/APPLICANTSet", {
        filters: aFilters,
        success: function(data) {
          var oDataModel = new sap.ui.model.json.JSONModel({
            Data: data.results,
            Remarks: "Test data",
            input1: "ofir",
            input2: "shove",
          });

          that.getView().setModel(oDataModel, "MainModel");
          that.getOwnerComponent().getModel("GlobalModel").setProperty("/Data", data.results);
        },
        error: function(error) {
          MessageBox.error("An error occurred while fetching data from the service.");
        },
      });
    },

    callCreateService: function() {
      var oEntry = {
        IvConfirmpassword: "",
        IvEmail: "",
        IvFirstname: "",
        IvLastname: "",
        IvPassword: "",
        IvRole: "",
        IvUsername: "",
        Id: "314625021",
        Firstname: "",
        Lastname: "",
        Role: "",
        Email: "",
        Password: "",
        Confirmpassword: "",
        Username: "",
        EvReturn: "",
      };

      var oModel = this.getOwnerComponent().getModel();

      oModel.create("/APPLICANTSet", oEntry, {
        success: function(data) {
          // Handle success response
        },
        error: function(error) {
          MessageBox.error("An error occurred while creating data using the service.");
        },
      });
    },
  });
});
