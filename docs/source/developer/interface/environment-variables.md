# Environment Variables

You can alter Interface's functionality using the following environment variables.

---

Use the source files for QML and other resources at runtime instead of the compiled files.

    HIFI_USE_SOURCE_TREE_RESOURCES=1

---

Enable the HMD debugging mode which emulates an HMD view in 2D for desktop testing.

    HIFI_DEBUG_HMD=1

---

Enable the OpenVR plugin to be used with an Oculus HMD. (Useful for debugging the OpenVR plugin if you have an Oculus HMD but not a SteamVR HMD.)

    HIFI_DEBUG_OPENVR=1

---

Override the metaverse URL.

    HIFI_METAVERSE_URL=<metaverse-server-url>

---

Allow multiple instances of Interface to run simultaneously.

    HIFI_ALLOW_MULTIPLE_INSTANCES=1

---

The Interface will have a custom default home and startup location.

    INITIAL_STARTUP_LOCATION=Location/IP/URL

---

Logging to the console can be controlled with the `VIRCADIA_LOG_OPTIONS` variable. It can be set to any comma separated combination of the following options. Case and whitespace are not significant.

* `color` - Force ANSI colors depending on the message's severity.
* `nocolor` - Force ANSI colors off.
* `milliseconds` - Log timestamps with millisecond precision.
* `process_id` - Log the process ID.
* `thread_id` - Log the thread ID.

For example:

    VIRCADIA_LOG_OPTIONS="color, milliseconds"

This will cause logging with millisecond precision, and color coding messages by severity.

    VIRCADIA_LOG_OPTIONS=milliseconds

Will result in only millisecond precision being applied to logging.

Color is enabled by default on Unix if output is being directed to a terminal, and disabled by default on Windows.
