#############################
Define Your Audio Environment
#############################

Audio is an integral part of a visitor's experience in your domain. Quality audio is essential for easy communication between real people, and it has a meaningful impact on a user's sense of immersion and presence in the world.

You define exactly how Vircadia's 3D immersive, stereo audio is implemented in your domain. Not only can you control the audio mixer's server configuration to a certain degree, you have full control over the attenuation and reverb levels throughout the entire domain. By defining zones, you can define sound-proof areas for private meetings and amplified stages for presentations. All of this is possible by changing the audio settings in your domain settings.

.. contents:: On This Page
    :depth: 2

-----------------
Audio Environment
-----------------

The audio environment defines how sound carries throughout your domain. We've designed our default audio settings to mimic reality - that is, we attempt to achieve a sense of presence by reflecting voices and sounds off of the surfaces in the virtual space. In addition, we adjust the volume of sound based on the distance between the source and the listener. 

However, we understand that our equation may not match exactly what you're looking for in your domain. You can change your domain-wide audio settings by adjusting the attenuation and the reverb levels (go to **Domain Settings > Content > Audio Environment**).

* *Attenuation* determines how much quieter sounds get over distance. The default domain attenuation is the amount of noise reduction that is enabled across the domain environment. Vircadia domains default to a distance attenuation curve roughly like the real world. If you see two avatars talking in the distance, you can hear them, but not very well. If you approach them, they become more audible in a manner that approximates what you're likely to be used to. If the default attenuation is 0, no matter how far away a sound source is, it still plays at full volume. Likewise, the default attenuation for a domain can be set very high (to a max value of 1), making only things very near to you audible.
* *Reverb* enables echo-like effects in your domain. It can give the effect of sounding like you are in a large empty room, deep inside a large cave, or inside a tiny room like a tiled shower. The 'Reverb Decay Time' defines how long you can hear an echo after the initial sound. 'Wet/Dry Mix' sets the percentage mix of the reverb tail relative to the original "dry" signal. Levels between 5-25% will generally give you useful results. For a very thick reverb, you might try a value as high as 50% where the reverb is nearly as loud as the original signal.

^^^^^^^^^^^
Audio Zones
^^^^^^^^^^^

A "zone" is a 3D area where you can define custom properties. In the case of an audio zone, it is a 3D area with its own unique attenuation and reverb properties defined. For example, an audio zone could be used to create two separate rooms in the same domain, where the sound does not migrate over into the other room.

To define an audio zone:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Audio Environment**.
3. Under 'Zones', click the ``+`` icon.
4. Enter a name for the zone, along with the zone's coordinates.
5. (Optional) If you have more than one zone, then you can set up the attenuation relationship between two specific zones. This relationship is known as the "attenuation coefficient". When the attenuation coefficient is 0, there is no change to the attenuation between zones; at 1, you won't be able to hear someone in another zone.
6. Under 'Reverb Settings', click the ``+`` icon, enter the zone name from step 4, and define the reverb levels for the zone.
7. Save your domain settings.

---------------------------
Audio Threading and Buffers
---------------------------

The 'Audio Threading' and 'Audio Buffer' sections of the Domain Settings define the server configuration for the audio mixer. Here, you can determine the number of threads the audio mixer uses to process audio, and when to throttle or buffer a heavy-loaded system.

.. note:: These are advanced domain server settings. Do not modify without prior technical knowledge of servers.



