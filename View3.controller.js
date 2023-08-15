sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function(Controller, JSONModel) {
    "use strict";
  
    return Controller.extend("project1.controller.View3", {
      onInit: function() {
        // Fetch the list of jobs from the backend and set it to the model
        var aJobs = []; // Replace this with the actual job data fetched from the backend
        var oModel = new JSONModel(aJobs);
        that.getOwnerComponent().getModel("GlobalModel").setProperty("/Data",data.results);
        this.getView().setModel(oModel, "jobsModel");
      },
  
      onJobListItemPress: function(oEvent) {
        // Get the selected job item and navigate to View4 with the selected job data
        var oSelectedItem = oEvent.getSource();
        var oSelectedJob = oSelectedItem.getBindingContext("jobsModel").getObject();
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView4", {
          jobId: oSelectedJob.jobId // Pass the jobId as a parameter to View4
        });
      }
    });
  });
  