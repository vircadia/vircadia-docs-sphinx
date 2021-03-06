# Command Line Parameters

You can launch Interface with the following parameters.

Displays help dialog

    -?, -h, --help

Displays version information

    -v, --version

Start up at specified URL location

    --url=<value>

Displays the protocol version

    --protocolVersion

Do not show the auto-updater

    --no-updater

Checks to see if the machine meets the minimum specification requirements.

    --checkMinSpec

Whether to run the server

    --runserver

Port to listen on. (Needs clarification!) 

    --listenPort=<port>

Where to find server content

    --serverContentPath=<path>

Set cache location. Defaults to the operating system local data path.

    --cache=<path>
    
Set path for defaultScripts.

    --scripts=<path>

Allow multiple instances of the interface to run simultaneously.

    --allowMultipleInstances

Preferred displays.

    --displays=<device>

Disable display plugin. Possible devices include "OpenVR (Vive)", "Oculus Rift".

    --disable-displays=<device>

Disable input plugin. Possible devices include "OpenVR (Vive)", "Oculus Rift".

    --disable-inputs=<device>

Suppress the prompt to reset interface settings

    --suppress-settings-reset

Let the Oculus plugin know if Interface was run from the Oculus Store

    --oculus-store

Emulate a standalone device

    --standalone

Disable the watchdog thread. The interface will crash on deadlocks.

    --disableWatchdog

(Needs clarification!)

    --system-cursor

Maximum concurrent resource downloads. Default is 16, except for Android where it is 4.

    --concurrent-downloads=<value>

Override the avatar URL

    --avatarURL=<url>

Replaces the Avatar URL. If both this and --avatarURL is set, this one takes precedence. 

    --replaceAvatarURL=<url>


Bookmarks are expected to be in a name=url form. An `=` character in the name or url is unsupported.

    --setBookmark <name=url>

Disable level of detail auto config.

    --disable-lod

Force enable crash reporting for the Interface.

    --forceCrashReporting
