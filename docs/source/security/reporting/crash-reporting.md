# Crash Reporting Privacy

Your interface has crash reporting enabled by default. You can disable this in the menu **Developer > Network > Disable Crash Logger**. When this is enabled, interface will send a minidump of information to the reporting server that the Vircadia developers have access to. The current crash management server is called [Sentry](https://sentry.io/).

Here is [information](https://docs.sentry.io/platforms/native/minidump/#what-is-a-minidump) on what a minidump is and how it's handled by Sentry.

Here is a list of extra metadata that is collected with a crash report:

* Username
* Domain + Location
* Avatar URL
* Build Type
* Display Plugin
* GPU Model + GPU Memory
* Desktop/VR Mode
* Machine Fingerprint
* Metaverse Session UUID
* "Is This A Steam Deployed Interface" Indicator