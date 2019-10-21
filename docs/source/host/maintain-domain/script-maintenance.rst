##################################
Maintain Your Domain with Scripts
##################################

You can "clean up" your domain using an :doc:`assignment client script <../../script/assignment-client-scripts>` that regularly performs maintenance tasks on your domain. For example, a script can remove entities that are not part of your default content set, load tools to help you inspect the contents of your domain, or identify loud avatars  and them in your domain. 

.. contents:: On This Page
    :depth: 2

-----------------------------------------
Write a Script
-----------------------------------------

With scripts, you are free to use our expansive `JavaScript API <https://apidocs.highfidelity.com>`_ to code any task that your programming expertise and creativity can come up with. Here, we've written an example assignment client script that returns our domain content to its default state every 1 hour. This means that any other entities rezz'd in our domain will be deleted within the hour by the script::
 
    var SEARCH_CENTER = {x: 0, y: 0, z: 0};
    var SEARCH_AREA = 60000; // search area (sphere) in meters radius
    var CLEANUP_INTERVAL_MIN = 60;

    var MINUTES_TO_MILLISECONDS = 60000;
    var ENTITIES_TO_KEEP = ["{ENTITY_ID1}", "{ENTITY_ID2}"]
        
    var initialized = false;
    var interval;

    Agent.isAvatar = true;
    Avatar.skeletonModelURL = "AVATAR_FST_URL";
    Script.update.connect(initialization);

    function cleanup() {
      EntityViewer.queryOctree();
      var foundEntities = Entities.findEntities(SEARCH_CENTER, SEARCH_AREA);
      print("Found: " + foundEntities.length + " entities");
      foundEntities.forEach(function(entityID){
        if(ENTITIES_TO_KEEP.indexOf(entityID) === -1) {
          print("Need to delete: " + entityID);
          Entities.deleteEntity(entityID);
        }
      });
    }

    function initialization(deltaTime) {
      if (!initialized) {
        if(Entities.serversExist() && Entities.canRez()) {
         Entities.setPacketsPerSecond(60000);
           EntityViewer.setPosition(SEARCH_CENTER);
           EntityViewer.setCenterRadius(SEARCH_AREA);
           Script.setInterval(function() {
             EntityViewer.queryOctree();
           }, 1000);
          initialized = true;
          interval = Script.setInterval(cleanup, CLEANUP_INTERVAL_MIN * MINUTES_TO_MILLISECONDS);
          Script.update.disconnect(initialization);
        }
      }
    }

    Script.scriptEnding.connect(function(){
      Script.clearInterval(interval);
    });


-----------------------------------------------------
Add Assignment Client Script to Domain
-----------------------------------------------------

To run your script on your domain: 

1. Save and upload your script to a cloud hosting site.
2.  Open your domain settings.

    * For cloud hosted domains, go to https://metaverse.highfidelity.com/user/cloud_domains. Click the "More Options" menu (3 dots on the right-side of the row), then click 'Domain Server settings'. Log in when prompted.
    * For local servers on Windows: Click on the High Fidelity icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the High Fidelity icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
3. On the top menu bar, select **Content > Scripts**.
4. Under 'Persistent Scripts', click the ``+`` icon.
5. Paste the URL to your script under ‘Script URL’.
6. Save and restart your domain. 

Now, the script will be running persistently on your domain until you either remove it or shut down the domain entirely.
