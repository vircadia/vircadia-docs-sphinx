# Maintain Your Domain

It is important that you keep your domain clean, and free of cluttered entities. You can do this with regular domain maintenance, where you clean your domain in intervals with an assignment client (AC) script. For example, you can write a script that deletes all entities that were created in a specified time (this is similar to "reverting" your domain to a backup at a specific time). Another maintenance method would be assigning the right permissions to users, so you can restrict who can edit your domain.

**On This Page**

+ [Set Temporary Create Permissions](#set-temporary-create-permissions)
+ [Use an AC Script to Clean Your Domain](#use-an-ac-script-to-clean-your-domain)

## Set Temporary Create Permissions

You can maintain your domain by giving visiting users temporary create permissions. A user can create and edit entities which will be automatically deleted after a specific interval of time (such as an hour). This keeps your domain free of clutter and maintains your domain as is. 

To give a user temporary create permissions: 

1. [Set user permissions](secure-domain.html#set-user-permissions) to 'rez temp'. This grants users create permissions for the interval of time specified in the domain settings. 
2. [Set entity specific permissions](secure-domain.html#set-entity-specific-permissions) (lock entities or set entity filters) to make sure that any visiting user cannot edit the existing entities in your domain.

For example, if you want to host a virtual class on adding and editing a cube's properties, you can:

1. Set user permissions to 'rez temp' and set an interval of an hour. Any user attending your class can create and edit a cube entity in your domain. This cube entity will be deleted in an hour. 
2. Lock all existing entities or set entity filters in your domain. This ensures that any visiting users cannot change or delete existing entities like your virtual blackboard or other classroom settings. 
3. Once your class is completed, any entities created by other users will be automatically deleted. You won't have to find these entities and delete them yourself to bring your domain back to its previous state. 

## Use an AC Script to Clean Your Domain

You can also maintain your domain using an [assignment client script](../script/assignment-client-scripts.html). This script can contain the details of the entities that you want to keep unedited in your domain and delete the rest. You can configure your domain settings to run this script. 

We've written an example assignment script that contains the list of entities in a domain that you don't want edited, and delete everything else. 

```javascript
var SEARCH_CENTER = {x: 0, y: 0, z: 0};
var SEARCH_AREA = 60000; // search area (sphere) in meters radius
var CLEANUP_INTERVAL_MIN = 1;

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
```

**See Also**

+ [Set User Permissions](secure-domain.html#set-user-permissions)
+ [Set Entity Specific Permissions](secure-domain.html#set-entity-specific-permissions)
+ [Assignment Client Script](../script/assignment-client-scripts.html)
+ [Backup and Restore Your Domain](backup-restore-domain.html)