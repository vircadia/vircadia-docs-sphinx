#########################################
Prioritize Zones Within Your Domain
#########################################

Whenever someone enters your domain, they must load all domain content, including avatars, models, textures and external resources that are used in the domain.  Many of these resources are not optimized and can take a while to load, especially in large domains or events with lots of avatars. In these situations, you can prioritize a zone so that all avatars within that zone move smoothly to all observers. The avatars within the zone are known as "heroes". Examples of heroes include a keynote speaker at an event or performers at a concert.

-----------------------------
Avatar Hero Zones
-----------------------------

All avatars in hero zones are allocated additional bandwidth, allowing them to load completely and move smoothly within the zone. You can set the amount of bandwidth that is dedicated to your hero zones in your :doc:`domain settings <../../host/configure-settings>`. Go to http://localhost:40100/settings and scroll to **Avatar Mixer > Advanced Settings > Hero Bandwidth** to set the bandwidth.

To create an avatar hero zone:

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Click the 'Zone' icon to create a zone entity. You’ll see a wireframe shape showing the zone's bounding box.
3. If you are unable to view the zone's bounding box, go to **Edit > Show Zones in Create mode** and select the option. Your zone should now be visible.
4. Go to the 'Properties' tab. Here, we recommend that you add a name to your zone.
5. For 'Avatar Priority', choose the desired setting:

    * Inherit: If the zone is nested within another zone, then it will inherit the priority of the parent zone. For single zones that are not nested, this option defaults to "Crowd".
    * Crowd: The zone will not be prioritized in any way.
    * Hero: The zone will be given preferential treatment, and additional bandwidth will be given to heroes within the zone. This ensures that all avatars within the zone will load completely and move smoothly.
6. Like all entities, you can customize your zone by changing the lighting, size, or shape of the zone.

At any point, you can change the properties of your hero zone. These changes will take place immediately, and the zone will be updated to match your new settings.