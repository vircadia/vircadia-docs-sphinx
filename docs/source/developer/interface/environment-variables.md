# Environment Variables

You can alter Interface's functionality using these environment variables.

Uses the source files for the QML and other resource at runtime instead of the compiled files.

    HIFI_USE_SOURCE_TREE_RESOURCES=1

Enables the OpenVR plugin to be used with an Oculus HMD. (Useful for debugging the OpenVR plugin if you have an Oculus HMD but not a Vive.)

    HIFI_DEBUG_OPENVR=1

Logging to the console can be controlled with the `VIRCADIA_LOG_OPTIONS` variable. It can be set to any comma separated combination of the following options. Case and whitespace are not significant.

* `color` - Force ANSI colors depending on the message's severity.
* `nocolor` - Force ANSI colors off.
* `milliseconds` - Log timestamps with millisecond precision.
* `process_id` - Log the process ID.
* `thread_id` - Log the thread ID.

For example:

    VIRCADIA_LOG_OPTIONS="color, milliseconds"

Will result in logging with millisecond precision, and color coding messages by severity.

Color is enabled by default on Unix, if output is being directed to a terminal, and disabled by default on Windows.
