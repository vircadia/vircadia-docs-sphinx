# Tutorial: Create a Portal

Portals in High Fidelity transport you to the domain of your choice. You can use these portals to travel to a domain you visit frequently instead of using the **GoTo** app on your HUD or Tablet. 

**On This Page:**

- [Prerequisites](#prerequisites)
- [Write a Script for the Portal](#write-a-script-for-the-portal)
- [Create and Edit an Entity to Use as a Portal](#create-and-edit-an-entity-to-use-as-a-portal)


## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)

## Write a Script for the Portal

A portal is an entity with a script attached (entity script). This attached script defines what happens when a user comes in contact with the portal. We've used [portal.js](https://raw.githubusercontent.com/highfidelity/hifi-content/44a10a3fb07f3271307ef0a2c28429d51f696326/DomainContent/Home/portal.js), the script used to teleport in High Fidelity domains. You can also [write your own script](../../script/write-scripts.html) to suit your needs.

The portal.js script we've used:
+ Uses High Fidelity's [JavaScript API](https://apidocs.highfidelity.com) to determine when a user walks into the entity and the teleport destination.
+ Includes a sound that will played every time a user uses the portal. 
+ Teleports a user to the specified destination.

## Create and Edit an Entity to Use as a Portal

Any entity you create to be used as a portal has to be [collisionless](entity-behavior.html#set-entity-behavior-on-collision) so that the script can detect when you walk into the entity. 

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](create-entities.html) to be used as a portal. This can be a 3D model or a box or sphere entity. 
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Next to 'Script', paste the script URL. In this case, it is '[portal.js](https://raw.githubusercontent.com/highfidelity/hifi-content/44a10a3fb07f3271307ef0a2c28429d51f696326/DomainContent/Home/portal.js)'.
5. The script takes the location you want to teleport to from the 'User Data' field under 'Behavior'.
6. Add `hifi:// welcome` (High Fidelity's welcome domain) to the 'User Data' field. 
7. Scroll down to 'Collision' and uncheck 'Collides'. This is so that a user can walk into the entity and trigger the script. 
8. Exit **Create** mode and walk into the entity. 

![](images~/create-portal.png)

You will be teleported to High Fidelity's welcome domain. 

**See Also**

- [Create New Entities](create-entities.html)
- [Change How Entities Look](entity-appearance.html)
- [Define an Entity's Behavior](entity-behavior.html)
- [Get Started with Scripting](../../script/get-started-with-scripting.html)
- [Client Entity Scripts](../../script/client-entity-scripts.html)
- [Write Your Own Scripts](../../script/write-scripts.html)
- [Interact with Your Environment](../../explore/interact.html)