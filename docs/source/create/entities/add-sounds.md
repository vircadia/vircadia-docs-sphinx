# Add Sound to Entities

Entities have the ability to add a collision sound, so that the entity will emit a sound every time it comes in contact, or [collides, with another entity](entity-behavior).

To add a sound:
1. In Interface, pull up your Tablet or HUD and go to **Create**. 
2. Select the entity. 
3. In the **Create** app, click on 'Properties' and scroll down to the 'Collision' settings. 
4. Check the box for 'Collides', then enter the URL of the audio file for 'Collision Sound'. 

## Tutorial: Create a Bouncing Ball
In this example, we will walk through the steps to create a bouncing ball that emits a sound every time it hits a wall.

1. Create a wall to bounce your ball off of:  
    1. [Add a cube entity](create-entities) to your domain.
    2. [Resize the entity](entity-appearance.html#set-the-size-of-an-entity) to approximately 10m wide, 10m high and 1m deep (X:10, Y:10, Z:1).  
2. Create a ball by [adding a sphere entity](create-entities) to your domain. Optionally, [change the color](entity-appearance.html#change-the-color-of-an-entity) of your ball, so that it is different than your wall.
3. In the **Create** app, click on 'Properties' and scroll down to the 'Collision' settings. Check the box for 'Collides' and 'Dynamic'.
4. For 'Collision Sound', enter the URL of your sound file. The sound must be a *.wav* file, uncompressed, 48Khz, 16 bit. The URL can be either a web address, or an ATP reference to the assets on this domain server.  
5. Scroll down to the 'Physics' settings. Set the 'Gravity' for Y to -5. This will cause your ball to fall a little more slowly than things on earth (use -9.8 if you want that). Gravity is in units of m/s<sup>2</sup>.

As soon as you click off the ball, the gravity will cause the ball to fall downwards. When it hits the floor, it should stop or bounce a little and the sound should play.

**See Also**

+ [Set Entity Behavior on Collision](entity-behavior.html#set-entity-behavior-on-collision)
+ [Set How an Entity Moves in a Gravitational Field](entity-physics.html#set-how-an-entity-moves-in-a-gravitational-field)


