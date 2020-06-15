# Debugging Tips

## Windows

### Visual Studio

When starting the interface using the **Local Windows Debugger**, you will want to set the Interface as your startup project. To do this, open your **Solution Explorer**. Then, expand the "Apps" folder and right click on **interface** and click "Set as Startup Project".

If you do not do this, the solution will try to start the debugger with **ALL_BUILD** under the "CMakeTargets" folder, resulting in an "Access is Denied" error.