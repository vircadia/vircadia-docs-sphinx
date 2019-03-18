###############################
Define an Entity's Behavior
###############################

An entity's behavior controls its interactions with other entities and avatars in High Fidelity. Can an entity be grabbed, does it collide with other entities and avatars, or can a change in the domain's gravity affect it? You can check and change an entity's behavior by editing its properties.

.. contents:: On This Page
    :depth: 2

----------------------------------------
Set an Entity to Respond to Physics
----------------------------------------

If you want an entity to :doc:`respond to physics <entity-physics>` or other entities and avatars, you need to make it dynamic. This allows a box to respond to gravity or a ball to bounce when it hits the floor. If an entity is not dynamic, it is static and has no gravity and no velocity. It can only be moved by a user.  

To make an entity dynamic:

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Select your entity on the 'Entity List' window or just click on it. 
3. Go to the 'Properties' tab, scroll down to 'Collisions' and check 'Dynamic'.

------------------------------------
Set Entity Behavior on Collision
------------------------------------

When an entity has no collision properties, it moves through other entities and avatars like it's not a solid object. For an entity to collide when it comes in contact with another entity or avatar, its collision properties need to be changed. With the entity selected, click on 'Properties' and scroll down to the 'Collision' settings. Here are the different collision settings you can configure:

+--------------------+-----------------------------------------------------------------------------+
| Collides With      | Description                                                                 |
+====================+=============================================================================+
| Static Entities    | Your entity will collide with static entities. Keep in mind that if your    |
|                    | entity is a static entity, it will not collide with another static entity.  |
|                    | Only a dynamic entity can collide with a static entity.                     |
+--------------------+-----------------------------------------------------------------------------+
| Kinematic Entities | Your entity will collide with kinematic entities. Kinematic entities have   |
|                    | velocity, but are not dynamic. Their behavior is controlled by an external  |
|                    | script.                                                                     |
+--------------------+-----------------------------------------------------------------------------+
| Dynamic Entities   | Your entity will collide with other dynamic entities.                       |
+--------------------+-----------------------------------------------------------------------------+
| My avatar          | Your entity will :doc:`collide with your avatar <avatar-interactions>`.     |
+--------------------+-----------------------------------------------------------------------------+
| Other avatars      | Your entity will collide with other user's avatars.                         |
+--------------------+-----------------------------------------------------------------------------+
| Collision Sound    | You can make your entity :doc:`emit a sound <add-sounds>` whenever it       |
|                    | collides with other entities.                                               |
+--------------------+-----------------------------------------------------------------------------+

-----------------------------
Make an Entity Grabbable
-----------------------------

Your entity's grab properties determine how it behaves when you or another user interacts with it. By default, 'Grabbable' and 'Follow Controller' are checked. Here are the different grab settings you can configure:

+-------------------+------------------------------------------------------------------------------+
| Behavior          | Description                                                                  |
+===================+==============================================================================+
| Grabbable         | You or other users can grab this entity.                                     |
+-------------------+------------------------------------------------------------------------------+
| Follow Controller | Your entity will follow the movements of your hand controller instead of     |
|                   | your avatar's hands. If your avatar's arms are shorter than your real arms,  |
|                   | your entity will be grabbed where the controller is (at a distance from      |
|                   | your avatar's hands).                                                        |
+-------------------+------------------------------------------------------------------------------+

----------------------------------------
Set an Entity to Trigger Scripts
----------------------------------------

If you want your entity to trigger a script when you, other users, or other entities come in contact with it, you can do so by editing its properties. Here are the different trigger settings you can configure:

+-------------+--------------------------------------------------------------------------------+
| Behavior    | Description                                                                    |
+=============+================================================================================+
| Triggerable | Your entity can trigger a script. For instance, you can trigger a cube entity  |
|             | to run a script asking for a tip every time you click it.                      |
+-------------+--------------------------------------------------------------------------------+

------------------------------
Make an Entity Cloneable
------------------------------

You can clone your entity to create other entities with the same properties as yours. While creating clones, you can set how long they'll exist, how many clones you can create, how the clone responds to physics, and if the clone is an avatar entity. Here are the different clone settings you can configure:

+---------------------+----------------------------------------------------------------------------------+
| Behavior            | Description                                                                      |
+=====================+==================================================================================+
| Cloneable           | Your entity can be cloned. You can change the 'Clone' settings to manipulate     |
|                     | your cloned entity's behavior.                                                   |
+---------------------+----------------------------------------------------------------------------------+
| *Cloneable* >       | Select this option to set how long (in seconds) your clone will exist.           |
| Clone Lifetime      |                                                                                  |
+---------------------+----------------------------------------------------------------------------------+
| *Cloneable* >       | Select to set a limit to how many clones you can create. If you don't want to    |
|                     | have a limit, set the value to 0  .                                              |
| Clone Limit         |                                                                                  |
+---------------------+----------------------------------------------------------------------------------+
| *Cloneable* >       | Select to make the clone entity a dynamic entity.                                |
| Clone Dynamic       |                                                                                  |
+---------------------+----------------------------------------------------------------------------------+
| *Cloneable* >       | Select to specify if a cloned entity is created as an avatar entity. An avatar   |
| Clone Avatar Entity | entity doesn't exist in the Entity Server. Instead, it is specific to a user's   |
|                     | Interface client. For instance, say a user comes to visit the coffee shop in     |
|                     | your domain. The user grabs a coffee cup that's been cloned. Once the user is    |
|                     | done visiting, the cloned entity leaves with their avatar, ensuring there isn't  |
|                     | any clutter left behind. This feature ensures that your entity is cloned         |
|                     | locally for each avatar.                                                         |
+---------------------+----------------------------------------------------------------------------------+

.. note:: A user does not need `create permissions <../../host/secure-domain.html#set-user-permissions>`_ to clone an entity or edit an unlocked entity.

To make entities cloneable in your domain (this can only be done with unlocked entities):

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Select the entity of your choice in the 'Entity List' window. 
3. Go to the 'Properties' tab, scroll down, and check 'Cloneable'.

Keep in mind that any user can now clone the entities that are cloneable. If you don't want any users to clone your entity or any entities in your domain, you can either:

1. `Lock any entities <../../host/secure-domain.html#lock-an-entity-in-your-domain>`_ you don't want cloned. 
2. `Deny lock unlock permissions <../../host/secure-domain.html#set-user-permissions>`_ to the users of your choice. 

OR

1. `Set entity filters <../../host/secure-domain.html#set-an-entity-filter>`_ to prevent users from editing entities in your domain.

-------------------------------------
Set an Entity to Cast a Shadow
-------------------------------------

You can make your entity behave like a real world object by making it cast a shadow on other entities and avatars. Here are the different shadow settings you can configure:

+-------------+--------------------------------------------------------------+
| Behavior    | Description                                                  |
+=============+==============================================================+
| Cast Shadow | Your entity will cast a shadow on other objects and avatars. |
+-------------+--------------------------------------------------------------+


**See Also**

+ :doc:`Apply Physics to Entities <entity-physics>`
+ :doc:`Define Interactions with Avatars <avatar-interactions>`
+ :doc:`Add Sound to Entities <add-sounds>`
+ :doc:`Interact with Your Environment <../../explore/interact>`