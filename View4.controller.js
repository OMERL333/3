sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ], function(Controller, MessageBox) {
    "use strict";
  
    return Controller.extend("project1.controller.View4", {
      onBackPress: function() {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteView3"); // "RouteView3" is the name of the route for View3
      },
  
      onSendPress: function() {
        // Get the file content and other necessary data
        var oFileUploader = this.byId("fileUploader");
        var sFileName = oFileUploader.getValue();
        var oFile = oFileUploader.getFocusDomRef().files[0]; // Get the file object
        var sFileContent; // This will hold the base64-encoded file content
        
        if (!sFileName || !oFile) {
          MessageBox.error("Please select a file to upload.");
          return;
        }
  
        // Read the file content as base64
        var oReader = new FileReader();
        oReader.onloadend = function(e) {
          sFileContent = e.target.result;
  
          // Now you can send the file content and other necessary data to the server
          // and handle the application submission logic there
          // For this example, we'll just show a success message
          MessageBox.success("Application submitted successfully!");
  
          // Optional: You can navigate back to screen 3 or perform any other actions after submission
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteView3"); // "RouteView3" is the name of the route for View3
        }.bind(this);
        
        oReader.readAsDataURL(oFile); // Read the file content as base64
      }
    });
  });
  