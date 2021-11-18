##########################
Frequently Asked Questions
##########################

We get a lot of questions from our users! If you have questions about Vircadia, feel free to browse through this page to learn more.

.. contents:: On This Page
    :depth: 2


----------------
Content Creation
----------------

+ `What video formats do you support? <#video-formats>`_

+-----------------------------------------------------------------------------------------------------+
| .. _video-formats:                                                                                  |
|                                                                                                     |
| What video formats do you support?                                                                  |
+=====================================================================================================+
| We support most open video formats. Proprietary formats like H.264 are currently not supported.     |
| The VP9 format is recommended because of its good quality and low file sizes.                       |
| See :doc:`Play Media in a Web Entity <create/entities/web-entity-media>` for a more information.    |
+-----------------------------------------------------------------------------------------------------+

--------------
Domain Hosting
--------------

+ `How do I get into my domain settings if I set up authentication but forgot my username and/or password? <#reset-password>`_

+-----------------------------------------------------------------------------------------------------+
| .. _reset-password:                                                                                 |
|                                                                                                     |
| How do I get into my domain settings if I set up `authentication                                    |
| <host/configure-settings/authentication-setting.html>`_ but forgot my username and/or password?     |
+=====================================================================================================+
| The authentication settings for your domain are encrypted into a configuration                      |
| file on the server's file system. To 'reset' the authentication settings, you need to               |
| manually remove the HTTP security settings ('http_password' and 'http_username') from               |
| config.json. The config file is stored on the server in the following directories:                  |
|                                                                                                     |
| * **Windows**: ``%AppData%\Roaming\Vircadia\domain-server\``                                        |
| * **Mac**: ``~/Library/Application Support/Vircadia/domain-server/``                                |
| * **Linux**: ``/var/lib/vircadia/default/domain-server/``                                           |
+-----------------------------------------------------------------------------------------------------+

---------------
Troubleshooting
---------------

+ `Where do I find the Interface log files? <#interface-log-files>`_
+ `How do I access the hidden folders that most Vircadia files are stored in? <#file-manager-help>`_
+ `Why can't I connect to a domain? <#cannot-connect>`_
+ `No one can hear me! <#no-input>`_
+ `I can't hear anything in Vircadia <#no-output>`_
+ `I have a problem using Vircadia on my AMD graphics card on Windows <#amd-problem>`_
+ `How do I install a different AMD graphics driver on Windows? <#amd-downgrade>`_

+-----------------------------------------------------------------------------------------------------+
| .. _interface-log-files:                                                                            |
|                                                                                                     |
| Where do I find the Interface log files?                                                            |
+=====================================================================================================+
| The Interfaces log files can be found in the following directories:                                 |
|                                                                                                     |
| * **Windows**: ``%AppData%\Local\Vircadia\Interface\Logs\``                                         |
| * **Mac**: ``~/Library/Application Support/Vircadia/Interface/Logs/``                               |
| * **Linux**: ``~/.local/share/Vircadia/Interface/Logs/``                                            |
|                                                                                                     |
| The Vircadia folder name might be different on development or testing builds.                       |
| E.g. ``Vircadia - dev``.                                                                            |
+-----------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| .. _file-manager-help:                                                                              |
|                                                                                                     |
| How do I access the hidden folders that most Vircadia files are stored in?                          |
+=====================================================================================================+
| On all currently supported operating systems the folders that Vircadia stores most of its data in   |
| are hidden.                                                                                         |
|                                                                                                     |
| The easiest way to access them is to just copy the path and paste it into your systems file manager.|
| Most (if not all) of them have a bar at the top.                                                    |
|                                                                                                     |
| .. image:: _images/file-manager-path.png                                                            |
|                                                                                                     |
| Even if it doesn't look like you can paste anything into the bar, still hover over it and try       |
| pasting with a shortcut like Ctrl + V.                                                              |
+-----------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| .. _cannot-connect:                                                                                 |
|                                                                                                     |
| Why can't I connect to a domain?                                                                    |
+=====================================================================================================+
| If you cannot connect to your virtual workplace, follow these steps to resolve the issue:           |
|                                                                                                     |
| 1. Check your internet connection, and ensure that your bandwidth is at least 10Mbps download,      |
|    2Mbps upload.                                                                                    |
| 2. You may not have permissions to enter the domain. If you know the domain owner, contact them to  |
|    gain access to the domain.                                                                       |
| 3. Ensure that your firewall settings allow you to run Vircadia.                                    |
|                                                                                                     |
|      * For Windows: In your firewall settings, open the  port 40102, and add 'interface.exe' to the |
|        list of allowed apps.                                                                        |
|      * For Mac: In your firewall settings, add 'interface.app' (**Library > Application Support >   |
|        Launcher > interface.app**) and allow incoming connections for that application.             |
+-----------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| .. _no-input:                                                                                       |
|                                                                                                     |
| No one can hear me!                                                                                 |
+=====================================================================================================+
| If other users in the domain can't hear you, then you are likely muted or your microphone gain is   |
| set too low. Here are some steps to troubleshoot your issue:                                        |
|                                                                                                     |
| 1. **Are you muted in Vircadia?** When logged in, check the upper left corner. If you're            |
|    muted, click the microphone to un-mute yourself.                                                 |
| 2. **Is your physical output device muted or turned off?** Some headsets and microphones have a     |
|    'Power' and/or 'Mute' switch directly on the device itself. This setting is completely           |
|    independent of Vircadia's mute option, so even if you're not muted in Vircadia, your             |
|    device itself may not be turned on or the mute button may have been pressed.                     |
|                                                                                                     |
|    .. image:: explore/_images/headsets.png                                                          |
|                                                                                                     |
| 3. **Is your mic muted or disabled on your computer?** Lastly, your device might be muted or        |
|    disabled by your operating system. Check your operating system's input device settings:          |
|                                                                                                     |
|     a. On Windows, go to **Control Panel > Sound > Recording** tab. Choose the device you are using |
|        with Vircadia and click 'Properties'. On the 'Levels' tab, check the icon next to the        |
|        volume meter. The microphone icon will tell you whether your headset/microphone is           |
|        muted. If you're muted, click the icon to un-mute yourself.                                  |
|     b. On Mac, go to **System Preferences > Sound > Input** tab. Choose the device you are using    |
|        with Vircadia. If the 'Input volume' is turned all of the way down, then your input          |
|        device is disabled. Turn up the input volume to re-enable your microphone.                   |
| 4. **Have you allowed Vircadia access to the microphone?** Some operating systems require you       |
|    to give explicit permission to apps to take advantage of specific hardware or software           |
|    capabilities on your computer. Check your microphone permissions in your operating system        |
|    settings:                                                                                        |
|                                                                                                     |
|     a. On Windows, go to **Settings > Privacy > Microphone**. Make sure that 'Allow desktop apps to |
|        access your microphone' is turned on.                                                        |
|     b. On Mac, go to **System Preferences > Security & Privacy > Privacy**, then select             |
|        'Microphone'. Ensure that the checkbox next to Vircadia is selected.                         |
|                                                                                                     |
| If your input device is turned on, and you are not muted in the application, device, or operating   |
| system, then it is likely that your microphone volume needs to be adjusted or boosted. This is done |
| in your operating system settings:                                                                  |
|                                                                                                     |
| * On Windows, go to **Control Panel > Sound > Recording** tab. Choose the device you are using with |
|   Vircadia and click 'Properties'. On the 'Levels' tab, adjust the 'Microphone Level' and/or        |
|   'Microphone Boost'.                                                                               |
| * On Mac, go to **System Preferences > Sound > Input** tab. Choose the device you are using with    |
|   Vircadia and adjust the 'Input volume'.                                                           |
+-----------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| .. _no-output:                                                                                      |
|                                                                                                     |
| I can't hear anything in Vircadia.                                                                  |
+=====================================================================================================+
| Here are some reasons you might not have audio:                                                     |
|                                                                                                     |
| * Your headset or speakers are turned off.                                                          |
| * Your headset or speakers may be muted or disabled by your operating system. Check your operating  |
|   system's output device settings:                                                                  |
|                                                                                                     |
|     * On Windows, click the volume icon in the taskbar and select your audio device. The speaker    |
|       icon will tell you whether or not your headset or speakers are disabled. Click the icon to    |
|       un-mute yourself.                                                                             |
|     * On Mac, go to **System Preferences > Sound > Output** tab. Choose the device you are using    |
|       with Vircadia. At the bottom of the dialog, uncheck 'Mute' to un-mute yourself.               |
| * Your headset or speakers have a volume control of their own. Check that the volume is turned up   |
|   on the device.                                                                                    |
| * In Vircadia, you have a different audio device selected than the one you want to use. Open        |
|   the **Audio** app and make sure the right headset, speakers, and/or microphone are selected.      |
| * Volume is turned down or off in Vircadia. Open the **Audio** app and check your volume            |
|   settings.                                                                                         |
+-----------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| .. _amd-problem:                                                                                    |
|                                                                                                     |
| I have a problem with Vircadia on Windows with my AMD graphics card.                                |
+=====================================================================================================+
| AMD can sometimes introduce issues into their graphics card drivers on Windows.                     |
| If you run into a new issue like mangled graphics or a crash on startup on your AMD graphics card,  |
| there is a chance that a driver update is at fault.                                                 |
|                                                                                                     |
| Known broken driver versions include:                                                               |
|                                                                                                     |
| * ``21.8.2 27.20.22025.1006`` - ``21.10.2 21.30.25.05`` (mangled graphics)                          |
| * ``20.11.2 27.20.14501.18003`` (crashing)                                                          |
|                                                                                                     |
| To fix this kind of issue you generally need to                                                     |
| `downgrade you graphics card driver <#amd-downgrade>`_ to an older working version.                 |
|                                                                                                     |
| If you do run into an issue like this please consider opening an issue on our                       |
| `GitHub issue tracker <https://github.com/vircadia/vircadia/issues>`_.                              |
| If you are fairly sure that this is an AMD driver issue, please consider                            |
| `reporting the issue to AMD <https://www.amd.com/report>`_.                                         |
+-----------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------+
| .. _amd-downgrade:                                                                                  |
|                                                                                                     |
| How do I install a different AMD graphics driver on Windows?                                        |
+=====================================================================================================+
| First you should check which driver version and graphics card you are actually using.               |
| To do this, open your Adrenalin Control Panel either by clicking the tray icon, or by searching     |
| for "AMD Radeon Software" in your start menu.                                                       |
| Then open your **Settings -> System** tab and check the "Radeon Software Version".                  |
|                                                                                                     |
| .. image:: _images/amd-radeon-software.png                                                          |
|                                                                                                     |
| Check what drivers are available for your AMD graphics card via the                                 |
| `AMD website <https://www.amd.com/en/support>`_.                                                    |
|                                                                                                     |
| .. image:: _images/amd-driver-search.png                                                            |
|                                                                                                     |
| Compare the driver version from the Adrenalin Control Panel with the recommended Radeon             |
| Adrenalin Software version.                                                                         |
|                                                                                                     |
| .. image:: _images/amd-compare-version.png                                                          |
|                                                                                                     |
| Take a look `further up <#amd-problem>`_ to see a list of known broken driver versions.             |
|                                                                                                     |
| If the version is lower, then please try upgrading to that version by clicking the appropriate      |
| download button and installing it. If the installer says it will continue after a restart           |
| and doesn't do so, just start it again.                                                             |
|                                                                                                     |
| If you are on the same version, then try downgrading your driver by clicking the small              |
| "Previous Drivers" link at the bottom left of the list, and choosing an older recommended version.  |
|                                                                                                     |
| .. image:: _images/amd-previous.png                                                                 |
|                                                                                                     |
| .. image:: _images/amd-choose-driver.png                                                            |
|                                                                                                     |
| Just download and run the driver installer.                                                         |
|                                                                                                     |
| If you are on a newer version, then please try downgrading to the "Recommended" driver version.     |
| Simply download and install using the same steps as above.                                          |
|                                                                                                     |
+-----------------------------------------------------------------------------------------------------+
