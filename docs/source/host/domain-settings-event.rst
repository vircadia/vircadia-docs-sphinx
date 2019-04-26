#############################################
Best Practices For Hosting Events 
#############################################

If you want to host an event in High Fidelity, you will need to modify your domain settings to ensure you can host a large number of people and load all your domain content. You will also have to consider securing your domain so that your content is safe and other users have a pleasant and memorable experience. 

Depending on the type of event you're hosting, determine the following:

1. The number of users you are expecting in your domain. 
2. The content you will be adding to the domain. 

We've listed some guidelines you can follow when you set up your domain for an event. 

.. note:: Keep in mind that domain settings will vary depending on your requirements. Here, we've listed the best practices, and you can tailor these to suit your needs.


1. :doc:`Host your domain <host-your-domain>`: If you're expecting a large number of users, we recommend hosting your domain on a virtual machine. You'll need to determine the size of the virtual machine you want to host your domain on. This varies depending on the number of users you're expecting and the content in your domain. 
2. `Set Up User Permissions <secure-domain.html#set-user-permissions>`_: It is good practice to set up user permissions and create entity filters so that users cannot create or edit entities in your domain. You can keep your domain clutter-free and keep users from modifying the existing domain content. 
3. `Create audio attenuation zones <your-domain/configure-settings.html#audio-environment>`_: Depending on the type of event you're hosting, you will need to create audio attenuation zones. These zones control how users hear audio. For example, if you're having an event with two hosts on stage, the hosts and audience members should hear the hosts louder than everyone else. You can set up two attenuation zones, one for the stage and the other for the audience.
4. Whitelist scripts: This step ensures that only whitelisted scripts can run in the domain. You are avoiding risking running any unauthorized scripts that could affect your domain and any users present.
5. Use only `server scripts <../script/get-started-with-scripting.html#types-of-scripts>`_: Local scripts can slow down load times for a domain. Use server scripts instead.
6. `Bake your content <oven.html>`_: Most content (avatars, entities, etc) in High Fidelity references external resources such as textures, models, scripts, and materials. When a user encounters any content in the domain, they need to download the content's resources. Many of these resources are not optimized and can take a while to download. Baking is the process of optimizing these resources to make them easier to transmit, store, and render, reducing load time significantly. 


**See Also**


+ :doc:`Host Your Domain <host-your-domain>`
+ `Set Up User Permissions <secure-domain.html#set-user-permissions>`_
+ :doc:`Configure Your Domain Settings <your-domain/configure-settings>`
+ :doc:`Manage Your Assets <manage-assets>`
+ :doc:`Bake Your Content Using the Oven <oven>`
