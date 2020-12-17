#####################################
Tutorial: Create a Smoke Fountain
#####################################

In this tutorial, you will learn how particle entities work by creating a smoke fountain that emits multiple colors. Particle entities are used to create effects made up of many small particles, such as smoke, confetti, or falling leaves.

.. contents:: On This Page
    :depth: 2


--------------------------------------
Prerequisites
--------------------------------------

Consider getting familiar with the following concepts before starting this tutorial:

+ `Create New Entities <create-entities.html>`_
+ `Change How Entities Look <entity-appearance.html>`_


---------------------------------
Create a Smoke Fountain
---------------------------------

Particle entities are used to create effects that are made up of smaller parts such as smoke, confetti, or falling leaves. The entity's effect and appearance is defined by its texture. The default texture is a `wispy smoke texture <https://cdn-1.vircadia.com/us-e-1/Bazaar/Assets/Textures/Defaults/Interface/default_particle.png>`_, but you can replace this texture with your own to create your desired effect.

To create your smoke fountain using a particle entity:


1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Click the 'Particle' icon to create the particle entity. By default, the particle entity emits smoke.
3. Go to the 'Properties' tab, and set the following values:

	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Property          | Value                                               | Description                                                                 |
	+===================+=====================================================+=============================================================================+
	| Lifespan          | ``1.20``                                            | This property defines how long each particle lives, in seconds.             |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Max Particles     | ``356``                                             | Max particles defines how many particles are rendered at one time.          |
	|                   |                                                     | Older particles, whose lifespans are completed, are swapped out for         |
	|                   |                                                     | newer ones. Increase this value to increase the number of particles         |
	|                   |                                                     | for your effect.                                                            |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Emit Rate         | ``524``                                             | The emit rate defines how many particles are emitted per second.            |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Speed Spread      | ``2.10``                                            | This defines the range of speeds the particles will emit, which changes as  |
	|                   |                                                     | per the Emit Speed. For example, if Emit Speed is ``5`` and Speed Spread is |
	|                   |                                                     | ``1``, the particles will have speeds that range from ``4`` to ``6``.       |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Emit Dimensions   | x = ``0.60``, y = ``10.00``, z = ``0.30``           | Particles are emitted from a radius. This property defines the outer limit  |
	|                   |                                                     | of that radius.                                                             |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Size              | Start = ``0.40``, Middle = ``0.80``,                | This property determines the size of each particle and how it changes from  |
	|                   | Finish = ``0.80``                                   | emission to end of life. Here, it starts at ``0.4`` and when its life is    |
	|                   |                                                     | completed, the particle has increased in size to ``0.8``.                   |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Color             | Start = ``#000000``, Middle = ``#FFFFFF``,          | This determines the colors the particles will emit. Start, middle, and      |
	|                   | Finish = ``#000000``                                | finish define the color spectrum to be emitted.                             |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Color Spread      | ``#FFFFFF``                                         | This determines the color spectrum of the particles.                        |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Emit Acceleration | x = ``0``, y = ``-9.09``, z = ``0``                 | This is the acceleration of each particle during its lifetime.              |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Spin Spread       | ``147.40``                                          | The spread in spins for the particle entity. Changing this value results    |
	|                   |                                                     | in a variety of spins for different particles.                              |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Horizontal Angle  | Start = ``0``, Finish = ``180``                     | This is the angle range in degrees at which the particles are emitted       |
	|                   |                                                     | along the z axis and rotated around on the y axis.                          |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+
	| Vertical angle    | Start = ``150``, Finish = ``180.``                  | This is the angle range in degrees at which the particles are emitted       |
	|                   |                                                     | along the x axis and rotated around on the z axis.                          |
	+-------------------+-----------------------------------------------------+-----------------------------------------------------------------------------+



.. video:: ../../_static/videos/smoke-fountain.webm
   :autoplay:
   :nocontrols:
   :loop:
   :muted:
   :additionalsource: ../../_static/videos/smoke-fountain.mp4

Congratulations! You've created a multi-colored smoke fountain! You can experiment with different settings to simulate particle movement, such as a waterfall, confetti gun, or falling leaves.






**See Also**

- :doc:`Create New Entities <create-entities>`
- :doc:`Change How Entities Look <entity-appearance>`
- :doc:`Create Tools <../tools>`

