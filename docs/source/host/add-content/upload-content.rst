##################################
Upload Content to your Domain
##################################

Whether you've created your own content set, baked some content, or gotten a content set from a friend, you'll need to upload it to your domain. Once you upload a content set, you will overwrite all existing content in your domain. Keep in mind that the existing backup files of your domain's content will not immediately be changed, so if you don't like your domain's new look, you can restore your old content at any time. 

To upload and install new content to your domain: 

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the Vircadia icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the Vircadia icon on the top menu bar, then click 'Settings'.
    * For any OS: Open a browser and enter the URL http://localhost:40100/settings.
2. On the top menu bar, select **Content > Upload Content**.
3. Under 'Upload Content', click 'Choose File'.
4. Browse to your content file. This can be a `.json of exported entities <export-content.html#export-entities-to-json>`_, a .json.gz from an extracted `content archive <export-content.html#create-a-manual-content-archive>`_, or a `content archive <export-content.html#create-a-manual-content-archive>`_ itself.
5. Click 'Upload Content'.
6. Confirm that you are sure that you want to replace your current content with the new content set.

At this point, your domain server will restart and the new content will be deployed in your domain. 
