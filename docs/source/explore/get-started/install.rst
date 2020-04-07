################
Install Vircadia
################

Vircadia has two different installers. The *Client Installer* comes with everything you need to view and interact with Vircadia's content and users. However, you are unable to host content using this installer. The *Client + Sandbox Installer* has everything the client installer does, but it also enables you to :doc:`host your own content <../../host>` and share it with the world. 

.. contents:: On This Page
    :depth: 2

--------------------------------
Minimum System Requirements
--------------------------------

In order to run Vircadia in either VR or Desktop mode, ensure that your computer meets these minimum system requirements: 

* Windows 10, 64-bit or MacOS High Sierra (10.13)
* 8GB+ RAM i5
* A wide range of Nvidia, AMD, and Intel graphics cards are supported

In addition, your network must have enough internet bandwidth to run Vircadia:

* If you are using Interface only to explore the metaverse, then you must have internet speeds of at least **10 Mbps download/2 Mbps** upload.
* If you are hosting a domain on your Sandbox, you need to add **10 Mbps** upload for each user you want to concurrently visit your domain. 

.. note:: We also run on Linux devices; however, we do not publish an installer for Linux machines. To use Vircadia on Linux, you will need to build the application from our code base. For more information, see our `Linux Build Guide <https://github.com/highfidelity/hifi/blob/master/BUILD_LINUX.md>`_.

-----------------------------------
Download Vircadia Installer
-----------------------------------

You can download Vircadia through our website: 

* `Download the Client Installer <https://vircadia.com/download-vircadia/#interface>`_
.. Download the Client + Sandbox Installer <https://vircadia.com/download-vircadia/#interface>`_


If you intend to use Vircadia in VR mode with a HMD, ensure that Steam VR is also installed on your system before launching Vircadia. 


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

----------------------------
Upgrade Vircadia
----------------------------


.. Vircadia is always changing, as we work to improve performance and add features that will enhance your experience in the metaverse. If a new version has been released, you will be prompted to upgrade your installation the next time you run Vircadia. At any time, you can also download the latest release from our `website <https://www.highfidelity.com/download>`_.

.. You cannot upgrade if Sandbox or the Console is running in the background of your computer. Be sure to quit these applications before upgrading.

.. For Windows, locate the Vircadia app in your system tray. Right-click on the icon and select 'Quit'. Alternatively, end the 'server-console' background process using the Task Manager.
.. For OS X, locate the Vircadia icon in the menu bar. Click on the icon and select 'Quit'.

.. For more information on the latest releases, see our :doc:`Release Notes <../../release-notes>`.



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