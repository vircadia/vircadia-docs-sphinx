# Add a Material Entity

You can add a material entity to an object in your domain. A material entity contains specific material data that determines the texture and shading of an object. For example, if you want to create a castle in your domain, you need your walls to look like they're made of rough gray stone. You can do this by adding a castle wall material entity to your walls. 

Before adding a material entity, make sure you have created a material using the [PBR Materials Guide](../3d-models/pbr-materials-guide).

**On This Page:**

+ [Generate a Material Entity](#generate-a-material-entity)
+ [Add a Material Entity](#add-a-material-entity)

## Generate a Material Entity

To add a material to your object in High Fidelity, you need to specify the material data in a JSON file. At this time, we have no way to automatically generate a JSON file with another tool, and you will need to write your own JSON file.

>>>>>We are aware of the difficulties involved in converting your material data to a JSON file and are working on making the process easier for our users. In the meantime, we recommend embedding your material data in your models as .fbx files if you are facing difficulties generating a .JSON file. 

This is what the .JSON file for a sample [castle wall material](https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall.hfm.json) looks like:

```
{
  "materialVersion": 1,
  "materials": [
    {
      "name": "CastleWall",
      "model": "hifi_pbr",
      "albedo": [1, 1, 1],
      "albedoMap": "https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall_Base_Color.png",
      "roughnessMap": "https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CCastleWall_Roughness.png",
      "normalMap": "https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall_Normal.png"
    }
  ]
}
```

This file contains all related material data, such as the color, roughness, and other texture and shading information. Note that you can edit this information programmatically with the `Material` [EntityType](../../api-reference/namespaces/entities#.EntityType) in our API, and define its properties using [EntityProperties-Material](../../api-reference/namespaces/entities#.EntityProperties-Material).

## Add a Material Entity

Once you have your material entity .JSON file, you can add it to an object in High Fidelity. Let's add the [castle wall material](https://hifi-public.s3.amazonaws.com/sam/MaterialExportGuide/MaterialEntities/MatOne/CastleWall/CastleWall.hfm.json) to a box entity in your domain. 

1. In Interface, pull up your HUD or Tablet and go to **Create**.
2. Create a wall. Click the 'Cube' icon to add a box entity and change the dimensions to make it resemble a wall. 
3. Go to the **Create** tab and click on the 'Material' icon to add a material entity. Enter the material's .JSON file URL when prompted. You will see the material entity represented as a small sphere. 
4. Click and select the wall. Go to the 'Properties' tab and copy the parent ID under the 'Name' box. 
5. Click and select the material entity. Go to the 'Properties' tab and paste the copied parent ID in the 'Parent' box. You will see the material applied to the wall. In this step, you are parenting or applying a material to an entity.

![](_images/material-entity.GIF)

**See Also**

+ [Create New Entities](create-entities)
+ [PBR Materials Guide](../3d-models/pbr-materials-guide)
