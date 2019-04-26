#########################
Adjust Your Settings
#########################

You can adjust various settings in High Fidelity so that it runs to your preferences. Many of these settings are changed using the HUD (in Desktop mode) or Tablet (in VR mode). 

.. contents:: On This Page
    :depth: 2

------------------------
The Tablet and HUD
------------------------

In VR, all of your settings are found in your **Tablet**. The Tablet also gives you easy access to any :doc:`apps that you install <../personalize/install-apps>`. Pull up the tablet by clicking the menu button on your controller.

.. image:: _images/tablet.png

In Desktop Mode, you have the option to use either the Tablet or a smaller version called the "Heads-up Display" or HUD. It contains the exact same options as the Tablet (settings, apps, etc), but it takes up less space on your screen. To enable the HUD, first enable the **Developer** menu by going to **Settings > Developer Menu**. Then, go to **Developer > UI > Desktop Tablet Becomes Toolbar**. 

.. image:: _images/hud.png

------------------------------
Enter or Exit VR Mode
------------------------------

You can enjoy High Fidelity with or with VR equipment such as head mounted displays (HMD), hand controllers and audio headsets. Our Desktop mode contains many of High Fidelity's features such as audio, basic movements and gestures, and the ability to travel to different domains. 

Keep in mind, however, that the most immersive and powerful experience is when you use VR equipment. Only then will you be able to interact with people in 3D, track body movements, and easily engage with the objects around you. We support the following VR equipment: 

+------------------------------------------------+---------------------+
| Head Mounted Displays                          | Hand Controllers    |
+================================================+=====================+
| Oculus Rift (CV1 and DK2, runtime version 1.3) | Oculus Touch        |
+------------------------------------------------+---------------------+
| HTC Vive                                       | HTC Vive            |
+------------------------------------------------+---------------------+
| Windows MR                                     | XBox One Controller |
+------------------------------------------------+---------------------+
|                                                | Leap Motion Orion   |
+------------------------------------------------+---------------------+

Once you have set up your VR equipment, you can easily switch between VR mode and Desktop mode. To switch to VR mode, use one of the following methods: 

1. From the HUD, click **Enter VR**.
2. Click the **Display** menu, then select your VR device. 

To exit from VR mode, remove your headset, click **Exit VR** on the HUD or press ``ESC`` on your keyboard.

------------------------------
Change Your Audio Settings
------------------------------

High Fidelity spatializes audio in real-time based on the location of the listener and the sound sources. A good headset will enhance your experience. You can adjust your audio settings by going to **Audio** on your tablet or HUD. 

+----------------------------+--------------------------------------------------------------------------------------+
| Setting                    | Description                                                                          |
+============================+======================================================================================+
| Mute microphone            | Mute or unmute your microphone.                                                      |
|                            |                                                                                      |
+----------------------------+--------------------------------------------------------------------------------------+
| Warn when muted            | Enable to receive a warning on your screen when your microphone is muted.            |
|                            |                                                                                      |
+----------------------------+--------------------------------------------------------------------------------------+
| Noise reduction            | Enable or disable noise reduction.                                                   |
|                            |                                                                                      |
+----------------------------+--------------------------------------------------------------------------------------+
| Audio level meter          | By default, the audio level meter is visible on the top left corner of your screen.  |
|                            | Uncheck this box to hide the meter.                                                  |
+----------------------------+--------------------------------------------------------------------------------------+
| Push To Talk (T)           | Enable or disable Push To Talk for other users to hear you when your microphone is   |
|                            | muted. When enabled, press and hold ``T`` to talk in desktop mode and press both     |
|                            | triggers on your controllers in VR mode. This feature works only when you are        |
|                            | focused on the Interface window.                                                     |
+----------------------------+--------------------------------------------------------------------------------------+
| Stereo input               | Enable or disable stereo input. Stereo reproduces sound using two or more audio      |
|                            | channels. This means that you will hear sound from various directions, like how you  |
|                            | would in the real world.                                                             |
+----------------------------+--------------------------------------------------------------------------------------+
| Choose Input Device        | Choose the microphone or `input device <#input-devices>`_ of your choice from the    |
|                            | list of devices displayed.                                                           |
+----------------------------+--------------------------------------------------------------------------------------+
| Choose Output Device       | Choose the speakers, headphones, or other `output device <#output-devices>`_ of      |
|                            | your choice from the list of devices displayed.                                      |
+----------------------------+--------------------------------------------------------------------------------------+
| People volume              | Use the slider to increase or decrease the volume of other users in the domain.      |
|                            |                                                                                      |
+----------------------------+--------------------------------------------------------------------------------------+
| Environment volume         | Use the slider to increase or decrease the volume of ambient sound in the domain.    |
|                            | For example, use this option to decrease the sound of background music or special    |
|                            | effects like fireworks.                                                              |
+----------------------------+--------------------------------------------------------------------------------------+
| System Sound volume        | Use the slider to increase or decrease your UI volume like tablet clicks.            |
|                            | Changing this value will not affect the People or Environment volume.                |
+----------------------------+--------------------------------------------------------------------------------------+



^^^^^^^^^^^^^^^^^^^^^^^
Input Devices 
^^^^^^^^^^^^^^^^^^^^^^^

An audio input device is any software or hardware device that accepts an output signal from another device. Examples of audio input devices include:

* A USB microphone
* A microphone headset that is plugged into your computer via the "Mic In" port
* Your sound card’s “Stereo Mix” device

	* Think of these devices as if they were microphones being held up to your speakers while they output sound
	
^^^^^^^^^^^^^^^^^^^^^^
Output Devices
^^^^^^^^^^^^^^^^^^^^^^

An audio output device produces a signal that drives another device’s input. Examples of audio output devices include:

* Desktop computer speakers
* Headphones
* Huge speakers in a movie theater

-----------------------------
Set Your Perspective
-----------------------------

You can choose how you view things around you by changing your perspective. To change your perspective: 

* In Desktop mode, go to **View** in the menu on the top left corner. 
* In VR mode, open your Tablet and go to **Menu > View**.

+------------------+---------------------------------------------------------------------------------------------------------+
| Setting          | Description                                                                                             |
+==================+=========================================================================================================+
| First Person     | Select this setting if you want to change your perspective in High Fidelity to first person.            |
|                  | In this view, you will not see yourself, only the environment around you.                               |
|                  |                                                                                                         |
|                  | .. image:: _images/first-person.png                                                                     |
+------------------+---------------------------------------------------------------------------------------------------------+
| Third Person     | Select this setting to change your perspective to third person. In this view, you will see              |
|                  | yourself, as well as the environment around you.                                                        |
|                  |                                                                                                         |
|                  | .. image:: _images/third-person.png                                                                     |
+------------------+---------------------------------------------------------------------------------------------------------+
| Mirror           | Select this to change your perspective to mirror. In this view, you will see yourself and               |
|                  | the space behind you.                                                                                   |
|                  |                                                                                                         |
|                  | .. image:: _images/mirror.png                                                                           |
|                  |                                                                                                         |
|                  | NOTE: You cannot move in mirror mode. It is for viewing only.                                           |
+------------------+---------------------------------------------------------------------------------------------------------+
| Independent Mode | Select this to change what you see through scripting instead of avatar's movements.                     |
+------------------+---------------------------------------------------------------------------------------------------------+
| Entity Mode      | Select this to set your perspective to a specific entity, allowing you to move with entity as it moves. |
+------------------+---------------------------------------------------------------------------------------------------------+

--------------------------------
Change How You Move in VR
--------------------------------

You can change many avatar movement settings in VR such as jumping, flying, and leaning behavior. To do so:  

* In Desktop mode, go to **Settings > Controls** in the menu on the top left corner. 
* In VR mode, open your Tablet and go to **Menu > Settings > Control**.

+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Setting                  | Description                                                                                                                          |
+==========================+======================================================================================================================================+
| *VR Movement* >          | This setting controls how your avatar moves in VR mode.                                                                              |
| Movement mode            |                                                                                                                                      |
|                          | * **Teleporting Only**: Your avatar can only teleport. You cannot walk, jump, or fly.                                                |
|                          | * **Walking and Teleporting**: Your avatar can walk and teleport. To jump or fly, enable the check box labeled *Jumping and flying*. |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| *VR Movement* >          | This setting controls how your avatar turns in VR mode.                                                                              |
| Rotation mode            |                                                                                                                                      |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| *VR Movement* >          | This setting controls if and when your avatar leans in VR mode.                                                                      |
| Avatar leaning behavior  |                                                                                                                                      |
|                          | * **Auto**: This is the default setting. Your avatar will lean if you are standing in the real world.                                |
|                          | * **Seated**: Your avatar will not lean if you are sitting in the real world.                                                        |
|                          | * **Standing**: Your avatar will lean if you are sitting in the real world.                                                          |
|                          | * **Disabled**: Your avatar can sit on the floor (experimental).                                                                     |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| User real world height   | You can change your real world height for better tracking in VR mode.                                                                |
| (in meters)              | You can change your real world height for better tracking in VR mode.                                                                |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Game Controller          | This setting is enabled by default. When enabled, you can use other types of controllers.                                            |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Perception Neuron        | Enable this setting to use the Perception Neuron motion capture system.                                                              |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Leap Motion              | Enable this setting to start using Leap Motion controllers.                                                                          |
+--------------------------+--------------------------------------------------------------------------------------------------------------------------------------+

--------------------------------
Other Miscellaneous Settings
--------------------------------

Here are some other settings you may like to change to optimize your experience.

^^^^^^^^^^^^^^^^^^^^^^
General Settings
^^^^^^^^^^^^^^^^^^^^^^

You can modify general settings such user interface and privacy settings in High Fidelity. 

* In Desktop mode, go to **Settings > General** in the menu on the top left corner. 
* In VR mode, open your Tablet and go to **Menu > Settings > General**.



^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
In-World Graphics Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can make changes to the graphics in High Fidelity. 

- In Desktop mode, go to **Settings > Graphics** in the menu on the top left corner. 
- In VR mode, open your Tablet and go to **Menu > Settings > Graphics**.

+--------------+----------------------------------------------------------------------------------------+
| Setting      | Description                                                                            |
+==============+========================================================================================+
| World Detail | You can control the detail visible to you in High Fidelity by moving this slider left  |
|              | to decrease and right to increase.                                                     |
+--------------+----------------------------------------------------------------------------------------+
| Show Shadows | Enable or disable viewing shadows. This setting is enabled by default. If you have a   |
|              | low game rate or are having trouble loading a domain, disabling this option may        |
|              | improve your performance.                                                              |
+--------------+----------------------------------------------------------------------------------------+

^^^^^^^^^^^^^^^^^^^^^^^^^^
Account Security Settings
^^^^^^^^^^^^^^^^^^^^^^^^^^

You can change your account security settings in High Fidelity.

- In Desktop mode, go to **Settings > Security** in the menu on the top left corner. 
- In VR mode, open your Tablet and go to **Menu > Settings > Security**.

+---------------------+----------------------------------------------------------------------------------+
| Setting             | Description                                                                      |
+=====================+==================================================================================+
| Account             | Enable to stay logged in (in the current device) even if you exit High Fidelity. |
+---------------------+----------------------------------------------------------------------------------+
| Secure Transactions | Change your security picture.                                                    |
+---------------------+----------------------------------------------------------------------------------+

**See Also**

+ :doc:`Configure Your Domain Settings <../../host/your-domain/configure-settings>`