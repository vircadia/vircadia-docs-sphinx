###########################
Install High Fidelity
###########################

High Fidelity has two different installers. The *Client Installer* comes with everything you need to view and interact with High Fidelity's content and users. However, you are unable to host content using this installer. The *Client + Sandbox Installer* has everything the client installer does, but it also enables you to :doc:`host your own content <../../host>` and share it with the world. 

.. contents:: On This Page
    :depth: 2

--------------------------------
Minimum System Requirements
--------------------------------

In order to run High Fidelity in either VR or Desktop mode, ensure that your computer meets these minimum system requirements: 

* Windows 10, 64-bit or MacOS High Sierra (10.13)
* 8GB+ RAM i5
* A wide range of Nvidia, AMD, and Intel graphics cards are supported

In addition, your network must have enough internet bandwidth to run High Fidelity:

* If you are using Interface only to explore the metaverse, then you must have internet speeds of at least **10 Mbps download/1 Mbps** upload.
* If you are hosting a domain on your Sandbox, you need to add **10 Mbps** upload for each user you want to concurrently visit your domain. 

.. note:: We also run on Linux devices; however, we do not publish an installer for Linux machines. To use High Fidelity on Linux, you will need to build the application from our code base. For more information, see our `Linux Build Guide <https://github.com/highfidelity/hifi/blob/master/BUILD_LINUX.md>`_.

-----------------------------------
Download High Fidelity Installer
-----------------------------------

You can download High Fidelity through Oculus store, Steam, or High Fidelity's website: 

* `Download the Client Installer <https://www.highfidelity.com/download>`_
* `Download the Client + Sandbox Installer <https://www.highfidelity.com/download#sandbox>`_

If you intend to use High Fidelity in VR mode with a HMD, ensure that Steam VR is also installed on your system before launching High Fidelity. 

----------------------------
Upgrade High Fidelity
----------------------------

High Fidelity is always changing, as we work to improve performance and add features that will enhance your experience in the metaverse. If a new version has been released, you will be prompted to upgrade your installation the next time you run High Fidelity. At any time, you can also download the latest release from our `website <https://www.highfidelity.com/download>`_. 

You cannot upgrade if Sandbox or the Console is running in the background of your computer. Be sure to quit these applications before upgrading.

* For Windows, locate the High Fidelity app in your system tray. Right-click on the icon and select 'Quit'. Alternatively, end the 'server-console' background process using the Task Manager.
* For OS X, locate the High Fidelity icon in the menu bar. Click on the icon and select 'Quit'.

For more information on the latest releases, see our :doc:`Release Notes <../../release-notes>`.

---------------------------------
Perform a Clean Install
---------------------------------

If you're facing problems when you load Interface and Sandbox, you can try performing a clean install. A clean install removes multiple files and settings that you may need once you install High Fidelity again. 

.. note:: Ensure that you back up the following files before a clean install: Favorites, Wearables, Sandbox, and Entities. These settings will be deleted during the clean install.

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Windows Clean Install
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Click on the Start menu and type "Add or Remove Programs" in your Windows search bar.  
2. Uninstall any versions of High Fidelity that are visible (Including any Steam installs). 
3. Once High Fidelity is uninstalled, browse to your %Program Files% directory. Delete all folders related to High Fidelity. If you installed through Steam, these folders will be located at ``C:/Program Files(x86)/Steam/steamapps/common``. 

.. warning:: 

    The next 3 steps will permanently delete your Sandbox content. If you wish to keep this content, copy %AppData%/Local/High Fidelity/assignment-client to another location on your computer before proceeding. Repeat for %AppData%/Roaming/High Fidelity/assignment-client. 

4. Browse to your local %AppData% folder (usually ``C:/Users/<your_username>/AppData/Local``). If you do not see the folder, make sure you can view hidden folders. In File Explorer, click View and make sure "Hidden Items" is checked. Delete all folders related to High Fidelity.  
5. Browse to your roaming %AppData% folder (usually ``C:/Users/<your_username>/AppData/Roaming``). Delete all folders related to High Fidelity.  
6. Re-install High Fidelity using the steps above. To restore your Sandbox content, copy the ``assignment-client`` folders you backed up back to their respective locations.  

^^^^^^^^^^^^^^^^^^^^^^^^
Mac Clean Install
^^^^^^^^^^^^^^^^^^^^^^^^

1. Open your Applications folder and delete the High Fidelity folder. 
2. Open the ``<username>/.config`` folder. This is a hidden folder than is accessible by going to *Go > Home*. Press the keyboard shortcut ``Command + Shift + .`` (period).
3. Delete the ``highfidelity.io`` folder. 
4. Open the ``~/Library`` folder by holding the Option key and clicking the 'Go' menu while in the Finder. The Library option should appear in the menu.
5. Browse to ``~/Library/Application Support`` and delete the High Fidelity folder.
6. Empty the Trash. 
7. Re-install High Fidelity using the steps above. 


**See Also**

+ :doc:`Install Your Domain <../../host/server-setup>`