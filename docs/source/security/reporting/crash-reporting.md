# Crash Reporting Privacy

Your interface has crash reporting disabled by default. You can enable/disable this in the **Settings > General** menu. When this is enabled, interface will send a minidump of information to the reporting server that the Vircadia developers have access to. The current crash management server is called [Sentry](https://sentry.io/).

Here is [information](https://docs.sentry.io/platforms/native/minidump/#what-is-a-minidump) on what a minidump is and how it's handled by Sentry.

Here is a list of extra metadata that is collected with a crash report:

* Username
* Domain + location
* Avatar URL
* Build type
* Display plugin
* GPU model + GPU memory
* Desktop/VR mode
* Machine fingerprint
* Metaverse session UUID
