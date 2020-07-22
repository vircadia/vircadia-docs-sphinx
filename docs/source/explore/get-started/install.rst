################
Install Vircadia
################

Vircadia has two different installers. The *Client Installer* comes with everything you need to view and interact with Vircadia's content and users. However, you are unable to host content using this installer. The *Client + Sandbox Installer* has everything the client installer does, but it also enables you to :doc:`host your own content <../../host>` and share it with the world.

.. contents:: On This Page
    :depth: 2

--------------------------------
Minimum System Requirements
--------------------------------

In order to run Vircadia , ensure that your computer meets these minimum system requirements:

* Operating system:

  * Windows 10, 64-bit
  * MacOS High Sierra (10.13) or newer
  * Ubuntu 18.04 64 bit or any other modern Linux distribution

* CPU:

  * Quad-core minimum
  * Quad-core with hyperthreading recommended

* System memory:

  * 6GB minimum
  * 8GB+ recommended

* Graphics adapter:

  * Nvidia 600 series minimum
  * Nvidia 900 series or higher recommended
  * AMD Radeon HD 87XX series minimum
  * AMD Radeon HD 89XX series or higher recommended
  * Intel 5th generation CPU integrated Iris graphics minimum
  * Intel integrated graphics are not recommended
  * OpenGL 4.1 minimum (supported by all graphics adapters listed above)

In addition, your network must have enough internet bandwidth to run Vircadia:

* If you are using Interface only to explore the metaverse, then you should have internet speeds of at least **10 Mbit/s download/2 Mbit/s** upload.
* If you are hosting a domain on your Sandbox, you need to add **10 Mbit/s** upload for each user you want to concurrently visit your domain. You will need only **2 Mbit/s** upload per user if you host your assets on an external web-server rather than your domain-server.

.. note:: Linux builds are currently experimental. If you run into trouble with the supplied AppImages you can try building Vircadia yourself using the `Linux Build Guide <https://github.com/kasenvr/project-athena/blob/kasen/core/BUILD_LINUX.md>`_ or `Vircadia-Builder <https://github.com/daleglass/vircadia-builder>`_.

.. note:: Running Vircadia in VR mode will need a much better graphics adapter, depending on your VR-System.

-----------------------------------
Download Vircadia Installer
-----------------------------------

You can download Vircadia through our website:

* `Download the Client Installer <https://vircadia.com/download-vircadia/#interface>`_


If you intend to use Vircadia in VR mode with a HMD, ensure that SteamVR or Oculus Runtime is also installed on your system before launching Vircadia.


---------------------------------
Install Vircadia
---------------------------------

Once you've downloaded the installer, you're ready to install Vircadia. The process will be different based on your operating system:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Windows Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To install on Windows, simply double-click on the downloaded installer file to open it. Run through the prompts on the installer. Once you finish the install process, Interface will open, and you will be able to log in and begin exploring the metaverse.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Mac Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

At this time, the Vircadia installer for Mac is unsigned, so you will need give the OS permission to install and the application.

1. Open the downloaded installer dmg file.
2. Agree to the License Agreement.
3. Drag Vircadia to the Applications folder.
4. Open **System Preferences > General**.
5. Next to the warning indicating that Interface is blocked, click 'Open Anyway'.
6. Confirm that you want to open the application.

At this point, Interface will open and you will be able to log in and begin exploring the metaverse.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Linux Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Mark the downloaded AppImage file as executable. (for example with ``chmod +x Vircadia-Alpha-2020.2.3-Asteria.AppImage``)
2. (optional) if you want the AppImage to be integrated into your system, install `AppImageLauncher <https://github.com/TheAssassin/AppImageLauncher>`_.
3. Execute AppImage.

----------------------------
Upgrade Vircadia
----------------------------

Vircadia is always changing, as we work to improve performance and add features that will enhance your experience in the metaverse. At any time, you can download the latest release from our `website <https://vircadia.com/download-vircadia/#interface>`_.

You cannot upgrade if Sandbox or the Console is running in the background of your computer. Be sure to quit these applications before upgrading.

For Windows, locate the Vircadia app in your system tray. Right-click on the icon and select 'Quit'. Alternatively, end the 'server-console' background process using the Task Manager.
For OS X, locate the Vircadia icon in the menu bar. Click on the icon and select 'Quit'.

For more information on the latest releases, see our :doc:`Release Notes <../../release-notes>`.


---------------------------------
Perform a Clean Install
---------------------------------

If you're facing problems when you load Interface and Sandbox, you can try performing a clean install. A clean install removes multiple files and settings that you may need once you install Vircadia again.

.. note:: Ensure that you back up the following files before a clean install: Favorites, Wearables, Sandbox, and Entities. These settings will be deleted during the clean install.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Windows Clean Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Click on the Start menu and type "Add or Remove Programs" in your Windows search bar.
2. Uninstall any versions of Vircadia that are visible (Including any Steam installs).
3. Once Vircadia is uninstalled, browse to your %Program Files% directory. Delete all folders related to Vircadia. If you installed through Steam, these folders will be located at ``C:/Program Files(x86)/Steam/steamapps/common``.

.. warning::

    The next 3 steps will permanently delete your Sandbox content. If you wish to keep this content, copy %AppData%/Local/Project Athena/assignment-client to another location on your computer before proceeding. Repeat for %AppData%/Roaming/Project Athena/assignment-client.

4. Browse to your local %AppData% folder (usually ``C:/Users/<your_username>/AppData/Local``). If you do not see the folder, make sure you can view hidden folders. In File Explorer, click View and make sure "Hidden Items" is checked. Delete all folders related to Vircadia.
5. Browse to your roaming %AppData% folder (usually ``C:/Users/<your_username>/AppData/Roaming``). Delete all folders related to Vircadia.
6. Re-install Vircadia using the steps above. To restore your Sandbox content, copy the ``assignment-client`` folders you backed up back to their respective locations.

^^^^^^^^^^^^^^^^^^^^^^^^
Mac Clean Install
^^^^^^^^^^^^^^^^^^^^^^^^

1. Open your Applications folder and delete the Vircadia folder.
2. Open the ``<username>/.config`` folder. This is a hidden folder than is accessible by going to *Go > Home*. Press the keyboard shortcut ``Command + Shift + .`` (period).
3. Delete the ``highfidelity.io`` folder.
4. Open the ``~/Library`` folder by holding the Option key and clicking the 'Go' menu while in the Finder. The Library option should appear in the menu.
5. Browse to ``~/Library/Application Support`` and delete the Vircadia folder.
6. Empty the Trash.
7. Re-install Vircadia using the steps above.


**See Also**

+ :doc:`Install Your Domain <../../host/server-setup>`
