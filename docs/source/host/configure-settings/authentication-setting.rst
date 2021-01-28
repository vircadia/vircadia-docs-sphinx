###########################
Secure Your Domain Settings
###########################

Add authentication (i.e. a username and password) to protect your domain settings from being modified by unauthorized users. Anyone who tries to modify your domain settings will need the username and password to make changes.

For cloud domains, you are required to set up a username and password as part of the setup process. Authentication is optional for domains running local servers.

To set up and/or change the authentication for your domain settings:

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.    
2. Scroll to 'Security'.
3. For 'HTTP Username' and 'HTTP Password', enter a username and password for basic HTTP authentication. 

.. note:: This username and password is not connected in any way to your Vircadia account, and is used only to access the settings for this specific cloud domain.

4. Re-enter your password into 'Verify HTTP Password'.
