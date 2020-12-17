##########################
Frequently Asked Questions
##########################

We get a lot of questions from our users! If you have questions about Vircadia, feel free to browse through this page to learn more.

.. contents:: On This Page
    :depth: 2


----------------
Content Creation
----------------

+ `What video codecs do you support? <#video-codecs>`_

+-----------------------------------------------------------------------------------------------------+
| .. _video-codecs:                                                                                   |
|                                                                                                     |
| What video codecs do you support?                                                                   |
+=====================================================================================================+
| We support the following video codecs:                                                              |
|                                                                                                     |
| * WebM VP8                                                                                          |
| * H.264, WebM                                                                                       |
| * WebM, H.264                                                                                       |
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
| * **Windows**: %AppData%\Roaming\Vircadia\domain-server\                                            |
| * **Mac**: ~/Library/Application Support/Vircadia/domain-server/                                    |
| * **Linux**: /var/lib/vircadia/default/domain-server/                                               |
+-----------------------------------------------------------------------------------------------------+

---------------
Troubleshooting
---------------

+ `Why can't I connect to a domain? <#cannot-connect>`_
+ `No one can hear me! <#no-input>`_
+ `I can't hear anything in Vircadia <#no-output>`_

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
