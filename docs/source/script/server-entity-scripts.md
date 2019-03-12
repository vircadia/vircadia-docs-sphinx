# Server Entity Scripts

You can make content in High Fidelity interactive by attaching scripts to entities. *Server entity scripts* are entity scripts that run on the server (or domain) that hosts the entity. These scripts run persistently in a domain, even if there are no users present. This means that there is only one instance of the script is running at a time, and it is running on the server. Any behavior that is controlled by your script will be seen and heard by everyone in the domain.

**On This Page**
* [Attach a Server Entity Script to an Entity](#attach-a-server-entity-script-to-an-entity)
* [Example of a Server Entity Script](#example-of-a-server-entity-script)
* [Script API](#script-api)

## Attach a Server Entity Script to an Entity
To attach a server entity script to an entity: 
1. In Interface, pull up your tablet or HUD and go to **Create**.
2. Select the entity you'd like to script by either clicking on it in Interface or finding it in the 'Entity List'.
3. In the **Create** app, go to the 'Properties' tab and scroll down to the 'Behavior' section. 
4. For 'Server Script', enter the URL to your server entity script. 

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>An entity can have multiple server entity scripts attached to it, but all of these must be through a single file URL. </p>
</div>

## Example of a Server Entity Script
The following script modifies the intensity of a light entity, so that it flickers tea lights.

```javascript
(function() {
    var MINIMUM_LIGHT_INTENSITY = 100.0;
    var MAXIMUM_LIGHT_INTENSITY = 125.0;

    // Return a random number between `low` (inclusive) and `high` (exclusive)
    function randFloat(low, high) {
        return low + Math.random() * (high - low);
    }

    var self = this;
    this.preload = function(entityID) {
        self.intervalID = Script.setInterval(function() {
            Entities.editEntity(entityID, {
                intensity: randFloat(MINIMUM_LIGHT_INTENSITY, MAXIMUM_LIGHT_INTENSITY)
            });
        }, 100);
    };
    this.unload = function() {
        Script.clearInterval(self.intervalID);
    }
});

```
This script is a good example of a server entity script because it only needs one actor to update the intensity of the light. The same script could be attached as an entity client script, but all clients who could see the tea light would be editing the entity to vary the intensity of the light to flicker it.

## Script API

The Entity Script Server does not have access to all of the listed components of the API. APIs for avatars, controllers, recording, overlays, and mouse and keyboard events are not available in the Entity Script Server.

Learn more about what APIs are available to server entity scripts [here](https://apidocs.highfidelity.com/Entities.html).

**See Also**

- [Get Started with Scripting](get-started-with-scripting.html)
- [Write Your Own Scripts](write-scripts.html)
- [API Reference](https://apidocs.highfidelity.com)