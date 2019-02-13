---
title: Add Items to the Marketplace
taxonomy:
    category: docs
---

Once you've created an avatar, wearable or entity, you have the option to sell it in the Marketplace. This guide walks you through the steps to upload it to the Marketplace so that you can start the process of having it reviewed and published. 
>>>>>Prior to adding your item to the Marketplace, we recommend that you use the [Marketplace Item Tester](../../create/tools#marketplace-item-tester) to ensure that your item works the way you expected and does not have any script errors.

**In This Section**
+ [Marketplace Categories](#marketplace-categories)
+ [Add Your Avatar](./upload-avatar)
+ [Add Your 3D Model](./upload-model)
+ [Add Your Wearable](./upload-wearable)
+ [Upload Your Environment](./upload-environment)
+ [Additional Notes](#additional-notes)

## Marketplace Categories
All items submitted to the Marketplace must fall under one or more pre-defined categories. It's important to correctly categorize your items as it helps other users find your content in the Marketplace. 

>>> Our Marketplace team reviews each submission to ensure items are correctly labeled. Items may be declined if they are not accurately described or extraneous categories are marked.

Below, you'll find descriptions of each Marketplace category and examples of items they include.

| Category  |  Description | Examples
|---|---|---|
| Animals | Items depicting animals, including static 3D models of animals and functional content.  | [Fetch app](https://highfidelity.com/marketplace/items/c66bae25-8345-4fd6-86db-bcebdc441827), [3D animal models](https://highfidelity.com/marketplace/items/b86b3a26-8404-4526-9faf-f0a923f4c563) |
| Animations  | Scripts and apps that modify or add animations to avatars, including inverse kinetics and flow manipulation.  | [Dance app](https://highfidelity.com/marketplace/items/9a99c95a-85b3-4a6d-9362-b56ad102ebe5) |
| Apps, Scripts, Tools  | Items composed primarily of JavaScript that add or modify functionality to High Fidelity's content and/or Interface. These can range from a single line of code that will change an entity's color to a full application that enables your avatar to dance. Proper apps must include an app.json root file.  | [Sit Point](https://highfidelity.com/marketplace/items/7a1e051d-7974-4d8e-8756-21382e7397c7), [Text-to-Speech](https://highfidelity.com/marketplace/items/568b183d-db87-4618-9e40-aba840ec3b26) |
| Architecture  | Structures or materials used to create structures including doors, walls, and flooring. This category does not include full environments like cities.  | [Apartment Building](https://highfidelity.com/marketplace/items/2baddb8b-9ac5-47ed-b78c-5a1b2861b004) |
| Audio  | Scripted items that produce sound effects and/or music.  | [Boombox](https://highfidelity.com/marketplace/items/e9da3d33-b937-4e07-bdf8-29dde581dfd1), [Looping Sound Emitter](https://highfidelity.com/marketplace/items/4a29c38c-c091-434e-8085-025f7d299529) |
| Avatars  | 3D models that are specifically rigged to work as an avatar. Proper avatars must include a .fst avatar root file.  | [Artemis](https://highfidelity.com/marketplace/items/e76946cc-c272-4adf-9bb6-02cde0a4b57d), [Mountain Ogre](https://highfidelity.com/marketplace/items/9515f437-f4e1-49a7-b6bf-0423873cd576)
| Education  | Used to promote educational materials for anything through the medium of Virtual Reality.  | [Laser Pointer Flashlight](https://highfidelity.com/marketplace/items/3d0dd29f-dbe7-4f49-8fef-d95619a4b891) 
| Environments  | A collection of items meant to fill a domain, providing a complete setting or a base to build a new setting from. Environments must be entity archives, as produced by backup files from High Fidelity domains.  | [Desert Oasis](https://highfidelity.com/marketplace/items/3b9eb431-564c-4d03-bf1c-4eff7eb93fe0)
| Fun & Games  | Interactive games and content, typically a scripted entity or app.  | [Beach Ball](https://highfidelity.com/marketplace/items/91035a3b-947d-4d03-8226-60d091ae173e), [Holiday Blaster](https://highfidelity.com/marketplace/items/9868f622-0c6b-460b-ad25-94c5521c0b65) |
| Furnishings  | Items used to decorate a space, usually furniture and other props for decoration.  | [Mirror](https://highfidelity.com/marketplace/items/f9085148-02f3-401c-b823-1df9f616f362), [Chairs](https://highfidelity.com/marketplace/items/fbb76479-1663-4914-b8b2-3b657fade384) |
| Light Systems  | Items that emit light, including furnishings and other content.  | [Lamp](https://highfidelity.com/marketplace/items/24629f85-ba4a-4311-9c50-b01c52371193), [Torch](https://highfidelity.com/marketplace/items/8114c307-c949-43fd-8c4d-f7d6b1e5d446) |
| Materials and Shaders  | Items users can use to customize shading or materials, including color and texture, on other entities.  | [Material Sets](https://highfidelity.com/marketplace/items/9e72fe33-61ca-4ca1-b6a5-c76930250634) |
| Misc  | Items that do not fit into any of the other categories. If marked Misc, items should not be marked with any other category. | [Particle Packs](https://highfidelity.com/marketplace/items/87706804-bcc0-4e75-ad16-6e30f2b63700)
| Nature  | Items relating to or depicting nature and the outdoors.  | [Plants & Pots](https://highfidelity.com/marketplace/items/e7a2f0ec-4dda-41d2-b17f-d4784ace27f6) |
| Open Source  | Free content available for the community to use and build upon. Items in this category require a source code link.  | [Digital Picture Frame](https://highfidelity.com/marketplace/items/77f0eb70-beba-49df-9e26-da1740bf6c9a), [Drumset](https://highfidelity.com/marketplace/items/658b506f-ff80-4f66-8dc3-578aa9bc1671) |
| Pets & Companions  | Items with scripted behavior or attachments that mimic a pet or companion. This category does not include static 3D models of animals commonly kept as pets.  | [Jimi the Snail](https://highfidelity.com/marketplace/items/a63c58d9-a8b2-4da7-91d6-ae2f159d218c), [Spirit Cat](https://highfidelity.com/marketplace/items/b86b3a26-8404-4526-9faf-f0a923f4c563) |
| Vehicles  | Items that are rideable and/or appear rideable through attachments or scripted functionality. This category does not include static 3d models of vehicles.  | [Skool Flyer](https://highfidelity.com/marketplace/items/f6ab09e8-8e29-4def-a957-19d8ebeac64c)
| VR Only  | Items that require a VR headset and/or controllers to function properly and will not work with Interface in desktop-mode.   | [Painting Set](https://highfidelity.com/marketplace/items/87d3d0f7-58f6-4e66-b432-66bc91251560)
| Weapons  | Items depicting any kind of weapon, usually attachable. Both deadly and fun-loving weapons are permitted.  | [Bow](https://highfidelity.com/marketplace/items/f03ab3f1-7e87-46ef-a3f0-e362f94a43ea), [Ping Pong Gun](https://highfidelity.com/marketplace/items/d87f440e-b561-4d67-99d3-f6c56c350ea7) |
| Wearables  | Items that attach to your avatar including hats, glasses, jewelry, and more.  | [Cat Tail](https://highfidelity.com/marketplace/items/2e6a5418-e376-4bca-bfcd-712f9790913f), [Backpack](https://highfidelity.com/marketplace/items/908f8de2-2b9a-4abf-a8a1-9a888ae57a15), [Friendship Bracelet](https://highfidelity.com/marketplace/items/f5c66f52-6f33-4303-ac74-6e03df0ab254) |
| Zones & Skies  | Items primarily utilizing [Zone Entities](https://docs.highfidelity.com/create-and-explore/entities/zone-entities) in High Fidelity.  | [Constellation Skybox](https://highfidelity.com/marketplace/items/208ba556-d457-4627-bdb1-2185591c7031), [Full Moon Skybox](https://highfidelity.com/marketplace/items/a8666e3d-01fd-4719-850c-b9c2acc49a65) |


## Additional Notes
Follow these guidelines when uploading content to the Marketplace: 

1. Use only content which you are legally entitled to.
2. Do not use a code obfuscator, our review team needs to be able to read your scripts.
3. Audio should sound clean and be 16-bit uncompressed WAV or MP3 files.
4. Items may not have .js root files. You should either make an app to run scripts, or attach scripts to entities that will be rezzed through a .json file.
5. All entities must have a name, even if they are invisible or simple primitives.
6. Please use English in your package description, support text, and code comments.
7. If needed, you may use [Markdown syntax](../../contribute/write-for-us#markdown-guide) in your description text.
