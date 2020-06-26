##########################
Add a Zone Entity
##########################

A zone entity allows you to set properties to a specific area. These properties include: flying, ghosting, key lighting, skybox, ambient lighting, hase, bloom and avatar priorities.

.. contents:: On This Page
    :depth: 2

-------------------------
Explanation of Properties
-------------------------

The amount of properties might seem intimidating at first. They all serve their own goals and have reason to exist:

+------------------------+---------------------------------------------------------------------------------------------+
| Property               | Description                                                                                 |
+========================+=============================================================================================+
| Flying Allowed         | Enables or disables flying for people inside the zone. This makes sense for gamemodes, or   |
|                        | if you just don't want people to break your immersion.                                      |
+------------------------+---------------------------------------------------------------------------------------------+
| Ghosting Allowed       | Enables or disables the ability to phase through colliders by disabling the enviroment      |
|                        | collisions. Useful for making labyrinths for example.                                       |
+------------------------+---------------------------------------------------------------------------------------------+
| Filter                 | Used to run scripts.                                                                        |
+------------------------+---------------------------------------------------------------------------------------------+
| Key Light              | Enabling this allows you to set a directional light, e.g. a sun, for the entire zone.       |
+------------------------+---------------------------------------------------------------------------------------------+
| Skybox                 | This allowed you to set a so called "Skybox". This is commonly used to apply a sky texture  |
|                        | the zone.                                                                                   |
+------------------------+---------------------------------------------------------------------------------------------+
| Ambient Light          | This is used to apply light coming from the Skybox. An example usecase for this would be to |
|                        | have a sun that is on the Skyboxs texture actually emit light.                              |
+------------------------+---------------------------------------------------------------------------------------------+
| Haze                   | Creates fog or mist.                                                                        |
+------------------------+---------------------------------------------------------------------------------------------+
| Bloom                  | This enables a visual effect known as "Bloom". A slight Bloom effect could be used to make  |
|                        | zones appear bright.                                                                        |
+------------------------+---------------------------------------------------------------------------------------------+
| Avatar Priority        | This property changes the update priority of avatar movements. It is commonly used on live  |
|                        | events to have                                                                              |
|                        | entertainers avatars' movements still be smooth, even with a huge crowd also being updated. |
+------------------------+---------------------------------------------------------------------------------------------+

^^^^^^
Filter
^^^^^^

^^^^^^^^^
Key Light
^^^^^^^^^

^^^^^^
Skybox
^^^^^^

Skyboxes are used to define the background of a zone. There is two types of skybox images that can be used. The aspect ratio gets used to define the type of image. Images with a differing aspect ratio will not be displayed.

Types:

* Cubemaps have an aspect ratio of 4:3 and consist of 6 sides, which are projected onto a cube.

.. image:: _images/cubemap-skybox.png

* Equirectanglar images have an aspect ratio of 2:1 and are projected onto a sphere.

.. image:: _images/equirectanglar-skybox.jpg

^^^^^^^^^^^^^
Ambient Light
^^^^^^^^^^^^^

^^^^
Haze
^^^^

Haze creates fog inside a Zone. This can be used to make things look more unsettling, but is also useful for hiding distant geometry.
There is a couple of properties available for Hase:

+------------------------+---------------------------------------------------------------------------------------------+
| Property               | Description                                                                                 |
+========================+=============================================================================================+
| Range                  | This sets how far the Haze extends in meters. Use this to influence viewing distance and    |
|                        | thickness.                                                                                  |
+------------------------+---------------------------------------------------------------------------------------------+
| Use Altitude           | This changes the Haze intensity depending on altitude. Higher altitude means more fog.      |
+------------------------+---------------------------------------------------------------------------------------------+
| Base                   | This is the base of the altitude range.                                                     |
+------------------------+---------------------------------------------------------------------------------------------+
| Ceiling                | This is the ceiling of the altitude range. Regardless of the name, the ceiling can be lower |
|                        | than the base to have the effect upside down; lower altitude meaning less fog.              |
+------------------------+---------------------------------------------------------------------------------------------+
| Haze Color             | Sets the color of the Hase.                                                                 |
+------------------------+---------------------------------------------------------------------------------------------+
| Background Blend       | This controls how much of the skybox is visible through the Haze. Higher values showing     |
|                        | more skybox.                                                                                |
+------------------------+---------------------------------------------------------------------------------------------+
| Glare                  | Glare can be used to show sun                                                                                           |
+------------------------+---------------------------------------------------------------------------------------------+
| Glare Color            | Sets the color of the Glare.                                                                |
+------------------------+---------------------------------------------------------------------------------------------+
| Glare Angle            | ?                                                                                           |
+------------------------+---------------------------------------------------------------------------------------------+

^^^^^
Bloom
^^^^^


**See Also**

+ :doc:`Create New Entites <create-entities>`
+ `The Create App <../tools.html#the-create-app>`_
+ :doc:`Define an Entity's Behavior <entity-behavior>`
+ :doc:`Change How Entities Look <entity-appearance>`
