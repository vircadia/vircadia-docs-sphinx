##################################
Protect Your Domain's Content
##################################

Entity filters are specialized JavaScript functions that prevent unwanted modifications to entities in your domain. They can be applied to a whole server or to specific zones within a domain. 

.. contents:: On This Page
    :depth: 2


--------------------------------------
Add an Entity Filter to Your Domain
--------------------------------------

Your domain can connect to any entity filter that is hosted on your Asset Server or the cloud. Once you've written a script (or use one of our own), upload it to your ATP server or a cloud hosting service of your choice. Then:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the High Fidelity icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the High Fidelity icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Entities**.
3. Click the 'Advanced Settings' button.
4. Under 'Filter Entity Edits', enter the URL of your entity filter script.


------------------------------------------------
Add an Entity Filter to a Zone in Your Domain
------------------------------------------------

You can choose to apply an entity filter to a specific zone within your domain, rather than to the entire domain. To do this: 

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. In the Entity List, locate and select the zone you want to protect.
3. In the Create Tools, click on the 'Properties' tab.
4. For 'Filter', enter the URL of your entity filter script.


-------------------------------
Included Entity Filters
-------------------------------

High Fidelity comes installed with a number of sample entity filter scripts. These are located in the following directories: 

* **Windows:** %Program Files%/Local/High Fidelity/scripts/tutorials/entity_edit_filters
* **Mac:** ~/Applications/High Fidelity/interface/Contents/Resources/scripts/tutorials/entity_edit_filters

These sample scripts show you how protect domain content by doing things like:

* Keep an entity inside a bounding box
* Only allow entities to be moved 5 meters or less
* Prevent the addition of entities named "Bob"
* Prevent entities from being deleted

Feel free to use these entity filters as-is or modify them to meet your own security needs for your domain.

-------------------------------
Additional Script Examples
-------------------------------

Here are a few more script examples to help you create your own entity filters::

    // Only allow changes to entity's basic physics; reject all other changes including adds and deletes
    (function() {
            function filter() {
            return false;
            }
            filter.wantsToFilterAdd = true; // run on adds
            filter.wantsToFilterEdit = true; // run on edits
            filter.wantsToFilterPhysics = false; // don't run on physics
            filter.wantsToFilterDelete = true; // do run on deletes
            filter;
    });
    
    // Reject all changes to your domain
    function filter(properties, filterType, originalProperties) {
        // doesn't matter here if rejectAll is set to true
    }
    // If reject all is true.  Any of the filterType changes won't go through
    filter.rejectAll = true; // default false