<div class="admonition warning">
    <p class="admonition-title">Warning</p>
    <p>This document is potentially slightly outdated. FIXME: Only mentions FBX and OBJ (check if glTF is also supported on compound shapes)</p>
</div>

# Tutorial: Modify a Zone Entity

A zone entity is a 3D area where you can create custom lighting environments. You can define zone boundaries using shapes and customize the zone’s light properties such as its intensity, direction, and color to create different effects.

The mini tutorials on this page show you how zone entities work and how you can edit their properties to create areas with different lighting effects.

**On This Page:**

- [Prerequisites](#prerequisites)
- [Create a Zone Entity](#create-a-zone-entity)
- [Create Nested Zones with Different Lighting](#create-nested-zones-with-different-lighting)
- [Change a Zone's Shape](#change-a-zones-shape)
- [Add a Skybox to a Zone](#add-a-skybox-to-a-zone)
- [Add Ambient Light to a Zone](#add-ambient-light-to-a-zone)


## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](create-entities)
- [Change How Entities Look](entity-appearance)

## Create a Zone Entity

To create a zone entity:

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Click the 'Zone' icon to create a zone entity. You'll see a wireframe shape showing the zone's bounding box. 
3. If you are unable to view the zone's bounding box, go to **Edit > Show Zones in Create mode** and select the option. Your zone should now be visible.
4. Go to the 'Properties' tab, and add a name 'Zone-1' for your zone. 

## Create Nested Zones with Different Lighting

Each zone entity you create can have different properties. When your avatar moves through different zones, you will experience each zone's properties. In the case of nested or overlapping zones, you will experience the properties of the smallest zone you are currently inside.

You can understand how an avatar experiences lighting in a zone using this mini tutorial:
1. [Create Two Zone Entities](#create-two-zone-entities)
2. [Nest One Zone Inside the Other](#nest-one-zone-inside-the-other)
3. [Add Different Lighting Effects to Each Zone](#add-different-lighting-effects-to-each-zone)

### Create Two Zone Entities

Follow the steps to [create a zone entity](#create-a-zone-entity) to create two zone entities named 'Zone-1' and 'Zone-2'.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>By default, zone entities are created at your current position, so to see the zone entities you just created, you may need to reposition your avatar.</p>
</div>

### Nest One Zone Inside the Other

To nest a zone, you have to resize one zone to make it smaller than the other, and change its position to bring it inside the larger zone.

1. In Interface, pull up your HUD or Tablet and go to **Create**.  
2. Select 'Zone-1' either from the Entity List or directly in Interface.
3. In the 'Properties' tab, change the dimensions of 'Zone-1' to `x=5, y=10, z=5`.
4. If you created both zones without moving your avatar, you don't need to change the zone's position. 'Zone-1' will already be inside 'Zone-2'. If you moved while creating the zones, select 'Zone-1' and move it inside 'Zone-2'.

### Add Different Lighting Effects to Each Zone

When you create a zone, it inherits the properties of the zone your avatar was standing in. This means that both zones inherit the lighting properties of your domain. You won't notice when you are entering or leaving a zone. 

All lighting effects have three modes:

+ Inherit: The property is inherited from the zone bounding the current zone.
+ Off: The lighting effect is turned off.
+ On: The lighting effect is turned on and can be changed to values of your choice. 

The keylight represents a parallel source of light, such as the sun. Let's change the keylight properties for each zone:

1. In Interface, pull up your HUD or Tablet and go to **Create**.  
2. Select 'Zone-1' either from the Entity List or directly in Interface.
3. In the 'Properties' tab, change the 'Key Light' property to 'On' from the drop-down.
4. Click on 'Key Light' color, and add these RGB (`255,0,0`) values to add a red key light. 
5. Select 'Zone-2' either from the Entity List or directly in Interface.
6. In the 'Properties' tab, change the 'Key Light' property by selecting 'On' from the drop-down.
7. Click on 'Key Light' color, and add these RGB (`0,0,255`) values to add a blue key light. 

When your avatar walks from Zone-1 to Zone-2, you will see the lighting around change from red to blue. 

## Change a Zone's Shape

By default, a zone's shape is a cube, like its bounding box. You can change a zone's shape to the following:

+ None: This will be the default shape (cube).
+ Box: The zone's shape will be a box. 
+ Sphere: The zone entity's shape will be a stretched sphere.
+ Ellipsoid: The zone entity will take the shape of an ellipsoid.
+ Cylinder: The zone entity's shape will be a cylinder. 
+ Compound: The zone entity's shape will be a convex mesh that is an FBX or OBJ file. These complex convex shapes must be composed of multiple shapes. We can’t check against hollowed out interior volumes. For example, if you want a zone shaped like a bowl, you’ll have to build it up from other elements. You can include elements like sides and a floor, especially if you want a user to experience the right collision properties when in the center of the bowl. Upload your FBX or OBJ file to a cloud server, copy the URL, and paste it in 'Compound Shape URL'. 

All shapes will be stretched to fit the zone entity's dimensions.

## Add a Skybox to a Zone

A skybox determines the texture of the sky in your domain. The skybox can be just a color, or an image from a URL. For example, you can have a blue sky or use an image of the night sky with stars as a skybox. 

To add a blue sky to your zone: 
1. In Interface, pull up your HUD or Tablet and go to **Create**.  
2. Select 'Zone-1' either from the Entity List or directly in Interface.
3. In the 'Properties' tab, change the 'Skybox' property by selecting 'On' from the drop-down.
4. Click on 'Skybox' color, and add these RGB (`0,0,255`) values to add a blue key light. 

To add an image of the night sky to your zone:
1. Host your image on a cloud service and copy the URL.
2. Create a JSON file that refers to the URL and other skybox properties.

   ```
   {
      "Entities": [
          {
              "skybox": {
                  "color": {
                      "blue": 255,
                      "green": 255,
                      "red": 255
                  },
                  "url": SKYBOX_IMG_URL
              },
              "skyboxMode": "enabled",
              "type": "Zone",
              "userData": "{\"grabbableKey\":{\"grabbable\":false}}"
          }
      ],
      "Id": ENTITY_ID,
   }
   ```

3. Host the JSON file on a cloud service. Copy its URL.
4. Select 'Zone-1' either from the Entity List or directly in Interface.
5. In the 'Properties' tab, change the 'Skybox' property by selecting 'On' from the drop-down.
6. In 'Skybox source', add the JSON file's URL. 

You'll see your zone's lighting change to the image you specified in the skybox.


## Add Ambient Light to a Zone

The ambient light in a zone is a source of light different from the key light and provides background lighting. For example, warm sunlight coming from a sunset in your domain is ambient light. 

Similar to the skybox, your ambient light image can be added as a JSON file.

1. Select 'Zone-2' either from the Entity List or directly in Interface.
2. Change the 'Ambient Intensity' to `1.00`. 
3. In 'Ambient Source', add your ambient light JSON file, or click 'Copy from Skybox' to use the same image as the skybox.

Your zone's ambient lighting will change to the image you've provided. 

**See Also**

- [Create New Entities](create-entities)
- [Change How Entities Look](entity-appearance)
