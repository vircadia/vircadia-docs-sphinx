###############################
Add Flow to Your Avatar
###############################

You can simulate physics on your avatar's hair, clothes, and body parts with a little bit of scripting and the help of High Fidelity's `Flow script technology <https://hifi-content.s3.amazonaws.com/luis/flowFiles/flow.js>`_.

The Flow script simply mimics the natural movement of hair and other attachments on your avatar. You can manipulate and change how Flow interacts with your avatar using the `Flow App <https://hifi-content.s3.amazonaws.com/luis/flowFiles/flowApp.js>`_. In order to use the Flow App, your avatar must contain flow threads. 

**On This Page**

* `Flow Threads <#flow-threads>`_
* `Flow App <#flow-app>`_
* `Add an Avatar Script <#add-an-avatar-script>`_
* `Avatar Examples <#avatar-examples>`_

---------------------
Flow Threads
---------------------

A *flow thread* is a set of connected joints with at least one joint that complies with the following rules:

1.  The first joint is connected to an existing avatar joint ("Hips" for example).
2.  Every joint in the thread should be named ``flow_[TYPE]_[INDEX]`` or  ``sim[TYPE][INDEX]``.

    * **TYPE** defines a group of joints that share a common physics setup and **INDEX** is an integer. For example, if the thread is used to simulate a skirt, all the "skirt" joints should be named flow_skirt_01, flow_skirt_02, etc.

.. image:: _images/flowthread.png

----------------------
Flow App
----------------------

After you ensure that you have the proper flow threads, run the `Flow app <https://hifi-content.s3.amazonaws.com/luis/flowFiles/flowApp.js>`_ to enable flow for your avatar.  See `this document <../../../../script/get-started-with-scripting#load-and-run-a-script>`_ for more information on how to run a script or app in High Fidelity.

Below are details and descriptions of the Flow app's functionality that will help you control and manipulate your avatar's flow. 

^^^^^^^^^^^^^^^^^^^^^^^
Display Panel
^^^^^^^^^^^^^^^^^^^^^^^

While this panel does not affect the actual behavior of your avatar's flow, it will help visually debug your script. 

.. image:: _images/displaypanel.png

+------------+---------------------------------------------------------------+
| Option     | Description                                                   |
+============+===============================================================+
| Avatar     | Hides or displays the avatar mesh.                            |
+------------+---------------------------------------------------------------+
| Collisions | Allows you to activate or deactivate collisions.              |
+------------+---------------------------------------------------------------+
| Debug      | Hides or displays the debug shapes.                           |
+------------+---------------------------------------------------------------+
| Solid      | Enables either a solid or wireframe display for debug shapes. |
+------------+---------------------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^
Joints Panel
^^^^^^^^^^^^^^^^^^^^^^^

This panel manages all motion related to joints. 

.. image:: _images/jointspanel.png

+-----------+-----------------------------------------------------------------------------------------+
| Option    | Description                                                                             |
+===========+=========================================================================================+
| Radius    | Determines the thickness of segments and knots (needed for collision testing).          |
+-----------+-----------------------------------------------------------------------------------------+
| Gravity   | Sets the Y-value of the gravity vector which represents the direction of gravity as it  |
|           | relates the flow thread.                                                                |
+-----------+-----------------------------------------------------------------------------------------+
| Stiffness | Changes how stiff each thread is.                                                       |
+-----------+-----------------------------------------------------------------------------------------+
| Damping   | Determines the amount of joint oscillation.                                             |
+-----------+-----------------------------------------------------------------------------------------+
| Inertia   | Changes the rotational velocity.                                                        |
+-----------+-----------------------------------------------------------------------------------------+
| Delta     | Controls the amount of time between each integration step.                              |
+-----------+-----------------------------------------------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^^^
Collisions Panel
^^^^^^^^^^^^^^^^^^^^^^^^^^

This panel manages collision spheres. Every collision sphere is positioned using an existing avatar joint and offset. The maximum amount of collisions is defined by the global ``COLLISION_SHAPES_LIMIT = 4``.  

.. image:: _images/collisionpanel.png

+--------+---------------------------------------+
| Option | Description                           |
+========+=======================================+
| Radius | Controls the collision sphere radius. |
+--------+---------------------------------------+
| Offset | Controls the collision sphere offset. |
+--------+---------------------------------------+

^^^^^^^^^^^^^^^^^^^^^
JSON Panel
^^^^^^^^^^^^^^^^^^^^^

This panel displays the output JSON data structure with your avatar's flow configuration, which you then include in your custom flow.js script.

.. image:: _images/jsonpanel.png

This data can be copied and pasted into the `Flow <https://hifi-content.s3.amazonaws.com/luis/flowFiles/flow.js>`_ script between the lines::

    // CUSTOM DATA STARTS HERE
     
    Erase existing code and paste new code here

    // CUSTOM DATA ENDS HERE

You can now add the modified Flow script to your avatar's FST file to see your work in action. 

-----------------------------
Add an Avatar Script
-----------------------------

In order to `attach a script to your avatar <../../../../script/avatar-scripts>`_, you must modify your avatar's FST file to include the path where your script lives. There are two ways to update your FST file:

1.  Manually add a line to the FST file telling the avatar where to find the script file using ``script = [FLOW SCRIPT URL HERE]``

.. image:: _images/addscript.PNG
2. Use the `Avatar Packager <../../create-avatars#package-your-avatar>`_ to add your avatar script.  

When packaging your model, the tool will iterate through the directory and add each script to the FST file. Now, you can upload the folder structure to the Marketplace or to your preferred hosting service.

---------------------------
Avatar Examples
---------------------------

Here is an example of an avatar that is rigged appropriately to use with Flow: `Mannequin with Hair <https://hifi-content.s3.amazonaws.com/jimi/avatar/Mannequin/hairTest/mannequinHairTest8.fst>`_.

**See Also**

+ `Avatar Standards <../avatar-standards>`_
+ `Package Your Avatar <../../create-avatars#package-your-avatar>`_
+ `Get Started with Scripting <../../../../script/get-started-with-scripting>`_