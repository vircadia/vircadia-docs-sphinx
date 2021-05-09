#######################
Command Line Parameters
#######################

---------
Interface
---------

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


-------------
Domain Server
-------------

You can launch a domain-server with these parameters.

Displays help information

    -h, --help

Displays version information

    -v, --version

ICE server address

    -i <IP:PORT or HOSTNAME:PORT>

Domain server UUID

    -d <uuid>

Requests a temporary domain name

    --get-temp-name

User config file path

    --user-config <path>

Displays the PID of the parent process

    --parent_pid


-----------------
Assignment Client
-----------------

You can launch an assignment-client with these parameters.

Displays help information

    -h, --help

Displays version information

    -v, --version

Assignment client type

    -t <type>

* 0 = audio-mixer
* 1 = avatar-mixer
* 2 = agent
* 3 = asset-server
* 4 = message-mixer
* 5 = entity-script-server
* 6 = entity-server

Assignment pool

    --pool <pool>

Assignment client UDP port

    -p <port>

Wallet destination

    --wallet <wallet-uuid>

Assignment server hostname

    -a <hostname>

Assignment server port

    --server-port <port>

Number of children to fork

    -n <child-count>

Minimum number of children

    --min <child-count>

Maximum number of children

    --max <child-count>

Assignment client monitor port

    --monitor-port <port>

HTTP status server port

    --http-status-port <port>

Directory to store logs

    --log-directory <path>

PID of the parent process

    --parent-pid <pid>
