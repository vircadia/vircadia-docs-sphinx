####################################
Build and Add Your Own Content 
####################################

Maybe you've wandered around the metaverse, and you're inspired by the creativity of others. Or maybe none of the other domains really fit the atmosphere of what you have in mind. Whatever the reason, you're ready to branch out and build content of your own. If you don't know where to begin, this is a great place to start.

.. contents:: On This Page
    :depth: 2

----------------------------------
Tools for Creating Content 
----------------------------------

A content set is simply a collection of many different entities, models and scripts working together to form an interactive environment. Visit our :doc:`Create <../../create>` section to learn more about the available tools and examples of how to make your environment more alive: 

* :doc:`Create Tools <../../create/tools>`
* :doc:`All About Entities <../../create/entities>`
* :doc:`Add Sounds to Entities <../../create/entities/add-sounds>`
* :doc:`Build and Import 3D Models <../../create/3d-models>`
* :doc:`Get Started with Scripting <../../script>`

------------------------------------------
Techniques for Creating Content Sets
------------------------------------------

Creating a content set can be complicated because you're designing an entire environment, rather than one single item. Its like building an entire city, which is comprised of many buildings, trees and roads. Some artists want to share their progress, each step along the way. Others want to wait to show off their creation until the final build is complete. 

We let you choose how you want to build and deploy your content. The process for updating the content set on your domain will differ based on the approach you use to build your content. Choose the method that fits you best to learn more:

+------------------------+------------------------------------------------------------------------------------------------------+
| Method                 | Description                                                                                          |
+========================+======================================================================================================+
| `Make Live Updates`_   | As you make a change to your content, it will show up immediately in your domain in the metaverse.   |
|                        | This means that any visitors in your domain will see the changes as they happen.                     | 
+------------------------+------------------------------------------------------------------------------------------------------+
| `Under Construction`_  | During the time that you're constructing your content set, your domain is offline to outside         |
|                        | visitors. Users will be unable to visit your domain while it is under construction.                  |
+------------------------+------------------------------------------------------------------------------------------------------+
| `Create and Deploy`_   | Here, you prefer to create your content in an offline environment. Once it is completed, you will    |
|                        | need to export your content set to an external file, then deploy it to your domain. Visitors can     |
|                        | continue visiting your domain with any placeholder content while you design your custom content.     |
+------------------------+------------------------------------------------------------------------------------------------------+


^^^^^^^^^^^^^^^^^^^^^^^^^^^
Make Live Updates
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Live updates are made anytime you or any other user in your domain makes changes to the content. In order to make changes, a user must have the 'Rez' permission turned on. 

Before going this route, decide on who (if anyone) you would like to change your content set, and :doc:`verify that their rez permissions are set correctly <../configure-settings/permission-settings>`. If you're going to be the one making changes, then ensure that you have rez rights. To update your content, all you need to is visit your domain and start making changes using the :doc:`Create Tools <../../create/tools>`.

Your server makes regular archives of the content in your domain. Visit your Domain Settings to :doc:`view and download the backups of your content sets <../maintain-domain/backup-domain>` over time.

.. note:: **Tip**: It is possible to "lock down" content that you've created, so that visitors can create new content without modifying your custom content. For example, you can lock down the walls and floor of a room, but let your visitors create their own tables and chairs. To protect your own custom content set, lock the entities you created. When you configure your permissions for your visitors, deny them access to 'Lock/Unlock', but grant them permission to 'Rez'. They will be able to create their own content in your domain, but not be able to change your domain's content set.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Under Construction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

While you make changes to your content set, you can take down your domain temporarily and prevent users from visiting while it is under construction. 

To do this, simply the remove the 'Connect' permission for all users other than yourself (and any other co-creators working alongside you). When you are done, all you need to do is re-enable the 'Connect' permission.

1. Open your domain settings.

    * For cloud hosted domains: Open a browser and enter the URL http://<insert your server's IP address here>:40100/settings. Log in when prompted.
    * For local servers on Windows: Click on the High Fidelity icon in the system tray, then click 'Settings'. 
    * For local servers on Mac: Right-click the High Fidelity icon on the top menu bar, then click 'Settings'.
2. On the top menu bar, select **Settings > Security**.
3. Scroll to 'Standard Permissions'. 
4. For each Permissions group, uncheck the 'Connect' permission for all users and groups (except yourself and anyone else working on the content). 
5. Click 'Save' and close the Domain Settings page.

Once you have set the permissions, visit your domain and begin building your content set using the :doc:`Create Tools <../../create/tools>`. We recommend locking all of your content so that it cannot be modified by visitors to your domain.

.. note:: Your server makes regular archives of the content in your domain. Visit your Domain Settings to :doc:`view and download the backups of your content sets <../maintain-domain/backup-domain>` over time.

When you're done, follow the above steps to re-enable the Connect permission for your visitors. These users will be able to visit your domain again with the server's IP address or place name.


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Create and Deploy
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The final technique for building a content set follows a basic development workflow: 

* Build content in an offline environment
* (Optional) Build and test it
* Export the content set to a file
* Upload the exported content set to your domain

We recommend using this method if you want to avoid interruption to your domain while you build your content, deploy your content set to multiple domains, or test your content before you deploy.

1. Install High Fidelity's open source `Client + Sandbox <https://www.highfidelity.com/download#sandbox>`_ software on a computer that is _not_ running as a local server. 
2. Open a Sandbox not connected to a local server.
3. Build your content set in the Sandbox.
4. `Export your content to JSON <export-content.html#export-entities-to-json>`_.
5. (Optional) To optimize your content set, :doc:`bake your content <bake-content>`.
6. (Local servers only) Transfer the downloaded archive file or the baked JSON to your local server. Switch computers so you're back on your local server.
7. Log in to your server's domain settings and :doc:`upload your exported or baked JSON to your domain <upload-content>`.

Once your content is uploaded, your domain will automatically restart with your new custom content.
