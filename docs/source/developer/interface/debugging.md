# Debugging Tips

## Windows

### Visual Studio

To run Interface from Visual Studio with the debugger attached you need to set Interface as the startup project. To do this, in **Solution Explorer**, expand the "Apps" folder, right click **interface**, and select "Set as Startup Project". Now **Debug > Start Debugging** and the **Local Windows Debugger** button on the debug toolbar will start Interface.

If you do not set the startup project to Interface, the debugger will try to start **ALL_BUILD** under the "CMakeTargets" folder, resulting in an "Access is Denied" error.
