##############################
Change How Entities Look
##############################

You can edit an entity's size, color, position and rotation using your mouse or trackpad. To edit an entity, open the `Create app <../tools.html#the-create-app>`_ and either select the entity or find it in the Entity List.

.. note::
    You can select and edit multiple entities at once. The behavior will be different based on the type of property you'd like to set:

    * Numbers: When using the slider, an offset will be applied to each of the original values. When typed in, the new value will replace the original values for the selected entities.
    * All other field types (checkboxes, input fields, etc): The new value will replace the original values for the selected entities.


.. image:: _images/select-entity.PNG

.. contents:: On This Page
    :depth: 2

--------------------------------
Change the Color of an Entity
--------------------------------

You can manually change the color of most entity types in the **Create** app. With the entity selected, click on 'Properties' and scroll down to the 'Color' settings. Here are the different color settings you can configure:

+------------------------+------------------------------------------------------------------+--------------------------+
| Setting                | Description                                                      | Supported Entity Type(s) |
+========================+==================================================================+==========================+
| Color                  | The color of an entity.                                          | Cube, Sphere             |
+------------------------+------------------------------------------------------------------+--------------------------+
| Light Color            | The color of the light.                                          | Light                    |
+------------------------+------------------------------------------------------------------+--------------------------+
| Text Color             | The color of the text.                                           | Text                     |
+------------------------+------------------------------------------------------------------+--------------------------+
| Background Color       | The color of the background of the text.                         | Text                     |
+------------------------+------------------------------------------------------------------+--------------------------+
| Key Light              | The color of the lighting in the zone. Select 'Inherit' to keep  | Zone                     |
|                        | the lighting of the domain, or 'Off' to remove all lighting.     |                          |
+------------------------+------------------------------------------------------------------+--------------------------+
| Sky Box                | The color of the ceiling in the zone. Select 'Inherit' to keep   | Zone                     |
|                        | the color of the domain, or 'Off' to remove all color.           |                          |
+------------------------+------------------------------------------------------------------+--------------------------+
| Ambient Light          | Configures the amount of ambient light in the zone. Ambient      | Zone                     |
|                        | light reflects on content within your zone.                      |                          |
+------------------------+------------------------------------------------------------------+--------------------------+
| *Haze* > Haze Color    | When Haze is turned on, the color of the haze in the zone.       | Zone                     |
+------------------------+------------------------------------------------------------------+--------------------------+
| *Haze* > Glare Color   | When Haze is turned on, the color of the glare based on the key  | Zone                     |
|                        | light.                                                           |                          |
+------------------------+------------------------------------------------------------------+--------------------------+
| Bloom                  | Configures how much the bright areas of the scene glow.          | Zone                     |
+------------------------+------------------------------------------------------------------+--------------------------+
| *Color* > Color        | As the particle moves, sets the color of the particle at the     | Particle                 |
|                        | start, middle, and finish.                                       |                          |
+------------------------+------------------------------------------------------------------+--------------------------+
| *Color* > Color Spread | The spread of color that each particle is given, resulting in    | Particle                 |
|                        | a variety of colors.                                             |                          |
+------------------------+------------------------------------------------------------------+--------------------------+

--------------------------------
Set the Size of an Entity
--------------------------------

For cube, sphere, text, image and web entities, you can change its size directly in your environment by selecting and dragging the small boxes inside the object.

.. video:: ../../_static/videos/resize-entity.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/resize-entity.mp4

For all entities, you can also set the size manually in the **Create** app. With the entity selected, click on 'Properties' and scroll down to the 'Size' settings. Here are the different size settings you can configure:

+------------------------+--------------------------------------------------------------------+--------------------------+
| Setting                | Description                                                        | Supported Entity Type(s) |
+========================+====================================================================+==========================+
| *Spatial* > Local      | The size of the entity. If the entity is parented to an avatar,    | All                      |
| Dimensions             | this value remains the original dimensions value while the avatar  |                          |
|                        | scale changes.                                                     |                          |
+------------------------+--------------------------------------------------------------------+--------------------------+
| *Spatial* > Dimensions | The size of the entity. If the entity is parented to an avatar,    | All                      |
|                        | this value will change if the avatar scale changes                 |                          |
+------------------------+--------------------------------------------------------------------+--------------------------+
| *Spatial* > Scale      | Sets the size of the entity as a percentage of its original size.  | All                      |
+------------------------+--------------------------------------------------------------------+--------------------------+
| Fall-Off Radius        | The distance from the light's center where the intensity is        | Light                    |
|                        | reduced.                                                           |                          |
+------------------------+--------------------------------------------------------------------+--------------------------+
| Spotlight Cut-Off      | Affects the size of the spotlight's beam; the higher the value,    | Light                    |
|                        | the larger the beam.                                               |                          |
+------------------------+--------------------------------------------------------------------+--------------------------+
| Line Height            | The height of each line of text.                                   | Text                     |
+------------------------+--------------------------------------------------------------------+--------------------------+
| *Emit* > Dimensions    | The outer limit radius that particles can be emitted from.         | Particle                 |
+------------------------+--------------------------------------------------------------------+--------------------------+
| *Emit* > Radius Start  | The inner limit radius that particles can start emitting from.     | Particle                 |
+------------------------+--------------------------------------------------------------------+--------------------------+
| *Size* > Size          | The size of each individual particle in the entity.                | Particle                 |
+------------------------+--------------------------------------------------------------------+--------------------------+
| *Size* > Size Spread   | How far apart a particle is from other particles.                  | Particle                 |
+------------------------+--------------------------------------------------------------------+--------------------------+

------------------------
Rotate an Entity
------------------------

All entities can be rotated directly in your environment by selecting and dragging the circles around the object.

.. video:: ../../_static/videos/rotate-entity.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/rotate-entity.mp4

You can also set the rotation manually in the **Create** app. With the entity selected, click on 'Properties' and scroll down to the 'Rotation' settings. Here are the different rotation settings you can configure:

+----------------------------+------------------------------------------------------------------+--------------------------+
| Setting                    | Description                                                      | Supported Entity Type(s) |
+============================+==================================================================+==========================+
| *Spatial* > Local Rotation | The orientation of the entity relative to its parent.            | All                      |
+----------------------------+------------------------------------------------------------------+--------------------------+
| *Spatial* > Rotation       | The orientation of the entity with respect to world coordinates. | All                      |
+----------------------------+------------------------------------------------------------------+--------------------------+

.. note:: You can switch between 'Local' and 'World' using the keyboard shortcut ``T``.

-----------------------
Move an Entity
-----------------------

All entities can be moved directly in your environment by selecting and dragging the object to the correct location. Alternatively, you can use the arrows around the object to move it in only one direction.

.. video:: ../../_static/videos/move-entity.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/move-entity.mp4

You can also set the position manually in the **Create** app. With the entity selected, click on 'Properties' and scroll down to the 'Position' settings. Here are the different position settings you can configure:

+----------------------------+---------------------------------------------------------------+--------------------------+
| Setting                    | Description                                                   | Supported Entity Type(s) |
+============================+===============================================================+==========================+
| *Spatial* > Local Position | The position of the entity relative to its parent.            | All                      |
+----------------------------+---------------------------------------------------------------+--------------------------+
| *Spatial* > Position       | The position of the entity with respect to world coordinates. | All                      |
+----------------------------+---------------------------------------------------------------+--------------------------+

.. note:: You can switch between 'Local' and 'World' using the keyboard shortcut ``T``.


**See Also**

+ :doc:`Interact with Your Environment <../../explore/interact>`
+ `The Create App <../tools.html#the-create-app>`_
+ :doc:`Define an Entity's Behavior <entity-behavior>`

