#########################
Use Your VR Equipment
#########################

To get the best and most immersive experience in High Fidelity, you should use VR equipment such as the Oculus Rift or HTC Vive. Only then will you be able to interact with people in 3D, track body movements, and easily engage with the objects around you. 

.. contents:: On This Page
    :depth: 2

------------------------
VR Controls
------------------------

Use these controls on your VR controllers so that you can enjoy your experience in High Fidelity to the fullest.

.. note:: If you want to jump and fly in VR, you must enable it under Settings > Controls > VR Movement.

.. image:: _images/controls-VR.png

-------------------------
Gamepad
-------------------------

While the use of a gamepad is supported, High Fidelity is best experienced with hand controllers like the Oculus Touch, HTC Vive, and Microsoft MR controllers.

.. image:: _images/controls-gamepad.png

Don't have your own VR equipment? You can still use High Fidelity in :doc:`desktop mode <desktop>`.

-----------------------------------------
Motion Capture Using Vive Trackers
-----------------------------------------

You can enhance your High Fidelity experience using full body motion capture (mocap). High Fidelity currently supports mocap using HTC Vive Trackers. 

Vive trackers need to be strapped to the body part you wish to track. You can replace the HMD and hand controllers with trackers if you only need to track the movement of your head and hands. 

You can set up different mocap systems:

+---------------------+--------------------------+---------------------------------------------------------+
| Mocap System        | Equipment Needed         | Recommended Straps                                      |
+=====================+==========================+=========================================================+
| Head                | HMD or 1 Vive Tracker    | Head strap for Vive Tracker                             |
+---------------------+--------------------------+---------------------------------------------------------+
| Hands               | Hand controllers or      | Hand strap for Vive Tracker                             |
|                     | 2 Vive Trackers          |                                                         |
+---------------------+--------------------------+---------------------------------------------------------+
| Head + Hands +      | 2 Vive Trackers + HMD +  | Foot straps                                             |
| Feet                | 2 Hand Controllers       |                                                         |
+---------------------+--------------------------+---------------------------------------------------------+
| Head + Hands +      | 3 Vive Trackers + HMD +  | Hip Strap: Drill a hole in the back of a thick leather  |
| Feet + Hips         | 2 Hand Controllers       | belt and attach the tracker using a 1/4" screw.         |
+---------------------+--------------------------+---------------------------------------------------------+
| Head + Hands +      | 4 Vive Trackers + HMD +  | Chest straps                                            |
| Feet + Hips + Chest | 2 Hand Controllers       |                                                         |
+---------------------+--------------------------+---------------------------------------------------------+
| Head + Hands +      | 5 Vive Trackers + HMD +  | Shoulder straps                                         |
| Feet + Hips +       | 2 Hand Controllers       |                                                         |
| Shoulders           |                          |                                                         |
+---------------------+--------------------------+---------------------------------------------------------+

.. note:: You can replace the HMD and hand controllers with trackers if you only need to track the movement of your head and hands.

.. image:: _images/tracker-placement.jpg

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Configure Your Mocap System
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Strap your Vive trackers to your body as shown in the image.
2. Connect your trackers, HMD, and controllers to SteamVR.
3. In Interface, pull up your HUD or Tablet and go to **Menu > Settings > Calibration**.
4. Configure your mocap system by:

   * Selecting the right device for your head and hands. If you're using a head tracker instead of an HMD, click 'Use HTC Vive Devices in Desktop Mode'.
   * Selecting the body position of any additional trackers. 
   
   .. image:: _images/vive-config.PNG
   
5. Click 'Apply and Calibrate'.
6. Stand in a T-Pose until the timer counts down to zero:

   * Feet together
   * Arms out
   * Head looking straight ahead.
   
7. Check to see that each tracker is tracking the corresponding joint on your avatar. 
8. You can also calibrate your trackers without using your tablet. Once you apply your configuration, stand in a T-Pose and hold the following four buttons together for 1 second: Left Trigger, Right Trigger, Left Menu Button, Right Menu Button. You can press the same buttons together for a second to remove your calibration from the trackers.

.. note:: When you setup your Vive, you choose which way to point the arrow as your reference. During calibration,  it is important that you face the same direction. If you can not remember the arrow's directon, press the Vive System Menu Button and look on the ground for a marker. This is important to make sure your joints are oriented correctly.

^^^^^^^^^^^^^^^^^^^^
Troubleshooting
^^^^^^^^^^^^^^^^^^^^

+---------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Issue                           | Troubleshooting Steps                                                                                                                                                                        |
+=================================+==============================================================================================================================================================================================+
| My calibration failed           | * Check if your trackers are properly connected in SteamVR.                                                                                                                                  |
|                                 | * Have you selected the correct configuration in your tablet and do you have enough number of trackers to support that configuration?                                                        |
|                                 | * If you are performing and not in HMD, did you select to 'Use HTC Vive in Desktop Mode'?                                                                                                    |
|                                 | * Are any of the trackers blinking? If so, they may need to be paired again.                                                                                                                 |
|                                 | * Do you have the correct number of dongles plugged in to your computer. You will need one dongle per tracker. If you are performing with all 7, then you may need a USB hub to handle them. |
+---------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| My sensor is jiggling a lot     | Make sure the straps on the sensor are tightened.                                                                                                                                            |
+---------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| My sensor keeps losing tracking | * If it’s the hip tracker, is your shirt is tucked in and not covering the puck? Also make sure your headphone cord isn’t covering the puck.                                                 |
|                                 | * Can the base stations clearly see the tracker?                                                                                                                                             |
|                                 | * Is the signal from the base station conflicting with another Vive setup nearby?                                                                                                            |
|                                 | * Are you clear of reflective surfaces nearby? (such as picture frames, whiteboards, shiny tables).                                                                                          |
|                                 | * Is the lighting consistent across the room (minimal outdoor lighting)?                                                                                                                     |
|                                 | * Try restarting SteamVR.                                                                                                                                                                    |
+---------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. note:: Remember to charge your trackers when you aren't using them so that you don't have to deal with a low battery tracker negatively impacting your performance.


**See Also**

+ :doc:`Interact with Your Environment <../interact>`
+ :doc:`Explore in Desktop Mode <desktop>`