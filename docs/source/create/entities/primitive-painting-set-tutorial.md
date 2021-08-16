# Tutorial: Build a Painting Set

There are different ways to create games and experiences in Vircadia. In this tutorial, we'll cover how to make a pixel-like painting set to allow users to "paint" pictures on a canvas made out of "pixels" that are box entities.

**On This Page:**

- [Prerequisites](#prerequisites)
- [Create a Painting Set](#create-a-painting-set)
- [Add a Paint Brush Script](#add-a-paint-brush-script)


## Prerequisites

Consider getting familiar with the following concepts before starting this tutorial:

- [Create New Entities](create-entities)
- [Change How Entities Look](entity-appearance)
- [Define an Entity's Behavior](entity-behavior)
- [Get Started with Scripting](../../script/get-started-with-scripting)
- [Client Entity Scripts](../../script/client-entity-scripts)
- [Write Your Own Scripts](../../script/write-scripts)

## Create a Painting Set

Our painting set comprises three elements:
* [A brush, made of a cylinder and a sphere object](#create-a-paint-brush).
* [A palette, made of an octagon and sphere object](#create-a-paint-palette).
* [A canvas, made of box entities](#create-a-pixel-canvas).

All of the logic for our painting set is contained in the brush head. The rest of the content is made by parenting entities to one another to make our brush, palette, and canvas.

### Create a Paint Brush
We'll start by creating the paint brush. The brush is comprised of two parts, the handle and the brush head. The brush handle is the parent of the brush head, so we can control the movement and color of the brush head using only the handle.

To create the brush handle:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](create-entities) to be used as the handle. This can be a box or sphere entity.
3. Go to the 'Properties' tab and select the 'Shape' drop down. Change the shape of the entity to a 'cylinder'.
4. Name your entity 'Paint-Paintbrush-Tube' by selecting the text box at the top of the 'Properties' tab.
5. Select your desired handle color from the 'Color' picker.
6. Scroll down to the 'Spatial' section. Change the local dimensions to: {x: 0.025, y: 0.5, z: 0.025}.

To create the brush head:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Click on the ['SPHERE' icon](create-entities) to create a sphere entity to be used as the brush head.
3. Go to the 'Properties' tab and select your desired brush head color from the 'Color' picker.
4. Name your entity 'Paint-Paintbrush-Head' by selecting the text box at the top of the 'Properties' tab.
5. Scroll down to the 'Spatial' section. Change the local dimensions to {x: 0.05, y: 0.1, z: 0.05}.

Once you've created the brush head, you can parent the brush handle to it:

1. In **Create** Tools app, select your brush handle and go to the 'Properties' tab.
2. Copy the 'entityID'.
3. From the Entity List window, select the brush head and go to the 'Properties' tab.
4. In the 'Parent' text box, paste the entityID of the brush handle (Paintbrush-Tube) entity.
5. Scroll down to the 'Spatial' section. Change the local position to {x: 0, y: 0.2, z: 0}.

We've detailed how you can add a script to use the brush to transfer color to other objects in [Add a Paint Brush Script](#add-a-paint-brush-script).

### Create a Paint Palette
The second part of our painting set is the palette. This is where you can get creative, and add as many (or as few) paint colors as you'd like. Once you have the base of the palette created, you can repeat the process of adding paints until you are satisfied with the end result.

To create the palette base:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create an entity](create-entities) to be used as the palette base. This can be a box or sphere entity.
3. Go to the 'Properties' tab and select the 'Shape' drop down. Change the shape to an 'octagon'.
4. Name your entity 'Paint-Palette-Base' by selecting the text box at the top of the 'Properties' tab.
5. Select your desired palette color from the 'Color' picker.
6. Scroll down to the 'Spatial' section. Change the local dimensions to {x: 0.55, y: 0.5, z: 0.55}.
7. Scroll down to the 'Behavior' section.  Check 'Grabbable'.

To create the paint colors:
1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. [Create a sphere entity](create-entities) to be used as your first paint color.
3. Go to the 'Properties' tab and name your entity 'Paint-Color' by selecting the text box at the top of the tab.
4. Select your desired paint color from the 'Color' picker.
5. Scroll down to the 'Spatial' section. Change the local dimensions to {x: 0.1, y: 0.05, z: 0.1}
6. In the **Create** Tools app, select your palette base and go to the 'Properties' tab.
7. Copy the 'entityID'.
8. Select your paint color and go to the 'Properties' tab.
9. In the 'Parent' text box, paste the palette base entityID.
10. Use the grab handles to adjust the position and size of the paint on the palette.
11. Scroll down to the 'Behavior' section and uncheck 'Grabbable'.

Repeat the above steps to create additional paint colors for your palette.

### Create a "Pixel" Canvas
The last component that makes up our painting set is the canvas we'll use for our "pixel" style painting. We've provided a JSON file for you to import a canvas so you don't need to go through each step individually, but you can import the grid multiple times to make a larger painting space, if desired.

1. In Interface, go to **Menu > Edit** and select 'Import Entities from URL'.
2. Paste [this URL](https://docs.vircadia.com/_static/resources/entities/canvas.json) into the dialog window and select 'OK'.

The canvas is made up of box entities parented to a single backplate, but you could use any entities to create a scene that could be painted this way.

## Add a Paint Brush Script

To start painting on the canvas, you have to write a paint brush script that serves as our 'painting' logic. This script will:
* Check if the paint brush head has collided with another entity.
* Check if this entity is a paint color, and change the color of the brush head.
* Check if the entity is a different entity. If it is not a paint color, the script will "transfer" it's color over to the other entity.

To add the paint brush script:

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Select the Paint-Brush-Head entity.
3. Go to the 'Properties' tab and scroll down to 'Behavior'.
4. Next to 'Script', paste the script URL. In this case, it is '[brushScript.js](https://docs.vircadia.com/_static/resources/entities/brushScript.js)'.
5. After you close the **Create** app, test it out by painting on the canvas in your domain!

**See Also**

- [Create New Entities](create-entities)
- [Change How Entities Look](entity-appearance)
- [Define an Entity's Behavior](entity-behavior)
- [Get Started with Scripting](../../script/get-started-with-scripting)
- [Client Entity Scripts](../../script/client-entity-scripts)
- [Write Your Own Scripts](../../script/write-scripts)
- [Interact with Your Environment](../../explore/interact)
