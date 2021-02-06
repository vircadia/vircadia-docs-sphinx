# JavaScript Tips & Tricks

Vircadia's robust [JavaScript API](https://apidocs.vircadia.dev) provides the tools for you to build great content and user experiences in VR. We've compiled some advanced JavaScript tips you can use while scripting for Vircadia. 

You can use the [Scripting Console in Interface](get-started-with-scripting.html#scripting-console) to try out the examples on this page. The output will be visible in the console itself. 

**On This Page:**

+ [Compute 3D Math Operations](#compute-3d-math-operations)
    + [Get Your Avatar's Position](#get-your-avatars-position)
    + [Get Your Avatar's Orientation](#get-your-avatars-orientation)
    + [Get the Direction Your Avatar is Facing](#get-the-direction-your-avatar-is-facing)
    + [Make an Entity Appear Before Your Avatar](#make-an-entity-appear-before-your-avatar)
+ [Include External JS and JSON Files](#include-external-js-and-json-files)
+ [Equip an Item](#equip-an-item)
+ [Connect a Signal to a Function](#connect-a-signal-to-a-function)

## Compute 3D Math Operations 

When you script for VR worlds like High Fidelity, you need 3D math operations to compute the position and orientation of 3D objects and avatars in-world. We cannot simply add two vectors. To script 3D math operations and to determine position and orientation information of avatars, you can use the following namespaces in our JavaScript API:

+ [Vec3](https://apidocs.vircadia.dev/Vec3.html): The Vec3 API has facilities for generating and manipulating 3-dimensional vectors. 
+ [Quat](https://apidocs.vircadia.dev/Quat.html): The Quat API provides facilities for generating and manipulating quaternions. 
+ [MyAvatar](https://apidocs.vircadia.dev/MyAvatar.html): The MyAvatar API provides facilities for manipulating avatars.  

### Get Your Avatar's Position

When creating objects in world, it's often very helpful to know where your avatar currently is.

High Fidelity uses a 3D Cartesian coordinate system where the position vector of an entity or avatar looks like this:

```javascript
{ x: 0, y: 0, z: 0 }
```

To get your avatar's current position, use the [MyAvatar](https://apidocs.vircadia.dev/MyAvatar.html) namespace. MyAvatar contains properties with information related to your avatar. Use the position property, `MyAvatar.position`, which returns an object. 

In the following example, we are using the JSON.stringify method to convert the JavaScript object (returned by `MyAvatar.position`) to a data string that can be sent over the server.

Open your Scripting Console and find your avatar's position.

```javascript
JSON.stringify(MyAvatar.position);
// {"x":-10.349810600280762,"y":-9.55379867553711,"z":11.861204147338867}
```

### Get Your Avatar's Orientation

If you want an object to appear in front of you, you need to know how your avatar is currently oriented in-world.

Rotations are handled are by a number-system called Quaternions. Quaternions help simplify calculations in three dimensional space. They add an extra dimension of 'w' and the values are normalized (-1,1).

Quaternions are represented in the form:

```javascript
{ x: 0, y: 0, z: 0, w: 1 }
```

Get your avatar's orientation in the Scripting Console by using the `MyAvatar.orientation` property:

```javascript
JSON.stringify(MyAvatar.orientation);
// {"x":0,"y":-0.4974651634693146,"z":0,"w":0.8674839735031128}
```

### Get the Direction Your Avatar is Facing

You can use the [Quat](https://apidocs.vircadia.dev/Quat.html) namespace to get the direction which your avatar is facing. Pass your avatar's orientation to `Quat.getForward` to get a vector describing which direction you are facing on the world axis.

```javascript
{ x: 0, y: 0, z: 1 } // Backward
{ x: 0, y: 0, z: -1 } // Forward
{ x: -1, y: 0, z: 0 } // Left
{ x: 1, y: 0, z: 0 } // Right
```

### Make an Entity Appear Before Your Avatar

You can make an entity appear before your avatar and also control the distance at which it appears. 

Use the [Vec3](https://apidocs.vircadia.dev/Vec3.html) namespace and the direction your avatar is facing to return the position at which you can make your entity appear. This position is 1m away from your avatar.

```javascript
Vec3.sum(MyAvatar.position, Quat.getForward(MyAvatar.orientation)); // This will add your position vector to the direction vector returned from Quat.getForward. This will represent a position that is 1 meter in front of your avatar.
```

You can also control the distance at which an entity appears rather than using the default distance of 1m. First, multiply the vector representing the direction your avatar is facing and the distance. 

```javascript
Vec3.multiply(Quat.getForward(MyAvatar.orientation), 2.0); // if we are facing forward, that means our vector { x: 0, y: 0, z: -1 }, get's multiplied by 2.0 giving us a vector of { x: 0, y: 0, z: -2 }
```

Use `Vec3.sum` to return a new vector representing how far away an entity will appear from your avatar.

```javascript
Vec3.sum(MyAvatar.position, Vec3.multiply(Quat.getForward(MyAvatar.orientation, 2.0))); // this will give us a final vector representing where in the world a point 2 meters directly in front of our avatar is
```

We've included the above operations in a function below for you to save and run as a script. 

```javascript
var myPosition = MyAvatar.position;   
var myOrientation = MyAvatar.orientation;
var myDirection = Quat.getForward(myOrientation);
var distanceInFrontOfMe = 2.0;
var distanceVectorOfObjectInFrontOfMe= Vec3.multiply(myDirection, distanceInFrontOfMe);
var positionOfObjectInFrontOfMe = Vec3.sum(myPosition, distanceVectorOfObjectInFrontOfMe);

// we can even wrap this all up in a function to help simplify this any time we want the position of an object to appear in front of us
function getPositionInFrontOfMe(distanceInFrontOfMe){
  var myPosition = MyAvatar.position;
  var myOrientation = MyAvatar.orientation;
  var myDirection = Quat.getForward(myOrientation);
  var distanceVectorOfObjectInFrontOfMe= Vec3.multiply(myDirection, distanceInFrontOfMe);
  var positionOfObjectInFrontOfMe = Vec3.sum(myPosition, distanceVectorOfObjectInFrontOfMe);
  return positionOfObjectInFrontOfMe;
}

getPositionInFrontOfMe(4.0); // { x: 0, y: 0, z: -4 }
getPositionInFrontOfMe(8.0); // { x: 0, y: 0, z: -8 }
```

## Include External JS and JSON Files

When writing a script in High Fidelity, you might need to access the methods or objects in an external JS file or get information from a JSON file. For example, if you're writing a script to make your avatar wave, you might need to use some methods that already exist in an external JS file. You can do this using the `require` method in the Scripts namespace of our API.

Any script that you try to retrieve using this method must export either a function or an object. Let's try this using an example. 

Create a JS script that you want to access from your main script. 

**example.js**

```javascript
module.exports = {
    sayHello: function () {
        console.log("Hello!");
    },
    sayGoodbye: function () {
        console.log("Goodbye!");
    }
};
```

In **example.js**, you are exporting two functions that print either Hello or Goodbye, depending on which function you call, to the console. Now, let's use `require` in your main script.

Create a JS script called **main.js**.

```javascript
var greet = Script.require(Script.resolvePath("example.js"));
greet.sayHello(); // prints Hello to the console
```

When you use the `require` method, you are making any function or object exported from **example.js** available to **main.js**. This means that **main.js** now has access to functions that will print either Hello or Goodbye to the console. In the above example, we are printing Hello to the console when we run **main.js**.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>We recommend using relative paths in your development so that you can easily move content without having to update absolute paths. However, in JSON files, you have to use absolute paths (e.g. in the event of a marketplace upload).</p>
</div>

## Equip an Item
You can equip an item by grabbing and holding an entity without pressing the grab button or trigger continuously. For example, you could equip a paint brush to your avatar's hand and drop it only when you're done painting. 

You can equip an item using a script:

```javascript
Messages.sendLocalMessage('Hifi-Hand-Grab', JSON.stringify({hand: 'XXX', entityID: 'YYY'})); \\ where XXX is either the left or right hand and YYY is entityID to equip
```

To drop the entity from your avatar's hand:
```javascript
Messages.sendLocalMessage('Hifi-Hand-Drop', 'XXX'); \\ where XXX is either the left or right hand
```

## Connect a Signal to a Function

Signals can be connected to functions. This means that every time a signal is triggered, a function is executed. For example, if your avatar changes when collisions are enabled or disabled, you can connect a function to react to this specific event such as:
```
function collisionChanged(enabled) {
  if(enabled) {
    console.log("avatar collision is enabled");
  } else {
    console.log("avatar collision id disabled")
  }
}

MyAvatar.collisionsEnabledChanged.connect(collisionChanged);
```

Each signal usually gets passed in arguments, and you can refer to the [API documentation](https://apidocs.vircadia.dev/MyAvatar.html) to see what a signal will provide you, such as the enabled property passed into collision changed.

It's good practice to disconnect from signals, but you can only do that if you name your function.

```
MyAvatar.collsionEnabledChanged.disconnect(collsionChanged);
```




**See Also**

+ [Write Your Own Scripts](write-scripts)
+ [API Reference](https://apidocs.vircadia.dev)
