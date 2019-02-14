# Apply Physics to Entities

Your High Fidelity VR experience is made realistic with the help of a [physics engine](https://pybullet.org/wordpress). High Fidelity uses this engine to simulate an object's behavior according to the Newtonian laws of physics. For example, if you hit a ball with a bat in High Fidelity, the physics engine computes these movements and makes the ball spin away from the bat after collision. You can modify an entity's physics behavior using the Create app. 

**On This Page:**

+ [Apply Physics to an Entity](#apply-physics-to-an-entity)
+ [Change an Entity's Velocity](#change-an-entitys-velocity)
+ [Set How a Moving Entity Slows Down](#set-how-a-moving-entity-slows-down)
+ [Set an Entity's Friction and Bounciness](#set-an-entitys-friction-and-bounciness)
+ [Set an Entity's Density](#set-an-entitys-density)
+ [Set How an Entity Moves in a Gravitational Field](#set-how-an-entity-moves-in-a-gravitational-field)

## Apply Physics to an Entity

To apply physics properties to an entity:

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Select or add any entity of your choice. 
3. Go to the 'Properties' tab and scroll down to 'Collisions'. Make your entity 'Dynamic'. Only dynamic entities can have physics properties applied to them. You can learn more about dynamic and static entities [here](entity-behavior).
4. In the 'Properties' tab, scroll down to find the physics properties. When you first create an entity, the physics properties are set to the default values you can see in the image below. ![](_images/physics-prop.PNG)

## Change an Entity's Velocity

Velocity is the speed of an object in a certain direction. All entities that have a position and orientation in High Fidelity will have linear and angular velocity. These velocities might be zero, but they still exist.

### Change an Entity's Linear Velocity

**3D Vector**
**Unit:** meters/second
**Default Value:** `(0,0,0)`

You can choose to make an entity move in a specified direction by changing its linear velocity. The direction is determined using the x, y, or z coordinates in a 3D Cartesian coordinate system. The 3D Cartesian coordinate system helps you determine the position of your entity in space. Every time your entity moves, its x, y, and z coordinates change to show you the new position. To change an entity's linear velocity:

1. Scroll down to 'Linear Velocity' property under 'Physics' in the 'Properties' tab. The default value is `0.0000`. 
2. Say you want to move a cube entity upwards in a straight line. Change the Y value for linear velocity to `0.1000` and see your cube start moving. 
3. If you want your cube to change direction, change the x and z values to `0.1000`. 

### Change an Entity's Angular Velocity

**3D Vector**
**Unit:** radians/second
**Default Value:** `(0,0,0)`

Angular velocity is the speed at which an object is rotating in a certain direction. It is measured in radians/second. You can change an entity's angular velocity:

1.  Scroll down to the 'Angular Velocity' property under 'Physics' in the 'Properties' tab. The default value is `0.0000`. 
2. Change the X value to see your cube entity start rotating around an axis. 
3. If you want your cube entity to change its angular velocity direction, change the Y and Z values . 

## Set How a Moving Entity Slows Down

**Scalar**
**Unit:** none
**Range:** `[0,1]`
**Default Value:** `0.00`

In High Fidelity, damping represents how much of an entity's linear or angular velocity is lost over time. All moving objects we see in the real world experience some friction with air, reducing their velocities over time. Damping is used to approximate this effect of the real world in High Fidelity. So if the damping of an object is `0.00`, it will not lose any velocity and it will not slow down. If the damping of an object is `1.00`, it will lose all its velocity and stop immediately.  If you want to throw a ball and have it slow down over time, you can add a damping value to do so. 

To set the linear damping of an object:

1. Scroll down to the 'Linear Damping' property under 'Physics' in the 'Properties' tab.The default value is `0.00`. 
2. [Change the linear velocity](#change-an-entitys-linear-velocity) of a cube to any value. 
3. Change the 'Linear Damping' value to `1.00` to make the cube stop moving. You can change this value to anything between `0.00` and `1.00` to make an entity slow down over time. 

To set the angular damping of an object:

1. Scroll down to the 'Angular Damping' property under 'Physics' in the 'Properties' tab. The default value is `0.00`. 
2. [Change the angular velocity](#change-an-entitys-angular-velocity) of a cube to any value. 
3. Change the 'Angular Damping' value to `1.00` to make the cube stop moving. You can change this value to anything between `0.00` and `1.00` to make an entity slow down over time. 

![](_images/gif-1.gif)

## Set an Entity's Friction and Bounciness

**Unit:** none
**Range:** `[0,1]`
**Default Value:** `0.5000`

When a dynamic entity collides with another entity, it can react in a number of ways depending on its physics properties. The values you set for friction and bounciness determine this reaction. By default, both values are `0.5000`.

Friction is a measure of how slippery an object is. When an entity with low friction collides against another object, it will slide a good distance before coming to a stop. On the other hand, an entity with high friction will slow down much faster. To set the friction of an entity:

1. Scroll down to the 'Friction' property under 'Physics' in the 'Properties' tab.
2. Change the value to anything between `0.0000` and `1.0000`. An entity with a friction of `0.0000` will be very slippery, while an entity with a friction of `1.0000` will have a coarse or sticky surface. 

Bounciness is the energy an entity conserves during collision. For example, a ball will conserve more energy and bounce more than a heavy cube. To set the bounciness:

1. Scroll down to the 'Bounciness' property under 'Physics' in the 'Properties' tab.
2. Change the value to anything between `0.0000` and `1.0000`. An entity with a bounciness of `0.0000` will  conserve no energy, while an entity with a bounciness of `1.0000` will conserve all of its energy. 

## Set an Entity's Density

**Scalar**
**Unit:** kg/cubic-meter
**Range:** `[100,10000]`
**Default Value:** `1000.0000`

An entity's density is the ratio of its mass to its volume. For example, an entity with low density is made of light materials such as wood, while an entity with high density is made of dense materials such as iron. 

In High Fidelity, the maximum (`10000`) and minimum (`100`) values of density were chosen for stability. It's difficult to perform stable physics calculations between objects of very disparate masses (such as a light feather and an iron ball). To help keep the environment stable we picked conservative density limits. To change this value:

1. Scroll down to the 'Density' property under 'Physics' in the 'Properties' tab. Change it to the value of your choice. 

## Set How an Entity Moves in a Gravitational Field

**3D Vector**
**Unit:** meters/second^2
**Default Value:** `(0,0,0)`

In the **Create** app, 'Gravity' is the acceleration of the entity, as if it were in a uniform gravitational field. This property controls how an entity behaves when you change the gravity of a domain. For example, if a ball is floating in zero gravity, it will float downwards when you increase gravity downwards. 

1. Scroll down to the 'Gravity' property under 'Physics' in the 'Properties' tab. Change to the value of your choice. 



**See Also**

+ [Define an Entity's Behavior](entity-behavior)
+ [Interact with Your Environment](../../explore/interact)
+ [Define Interactions with Avatars](avatar-interactions)