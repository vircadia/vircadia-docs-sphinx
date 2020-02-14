uniform vec3 _diffuse = vec3(0.0);
uniform vec3 _specular = vec3(0.0);
uniform vec3 _emissive = vec3(0.0);
uniform float _alpha = 1.0;
uniform float _roughness = 0.0;
uniform float _metallic = 0.0;
uniform float _occlusion = 0.0;
uniform float _scattering = 0.0;
uniform float _emissiveAmount = 0.0;

float getProceduralFragment(inout ProceduralFragment proceduralData) {
    proceduralData.diffuse = _diffuse;
    proceduralData.specular = _specular;
    proceduralData.emissive = _emissive;
    proceduralData.alpha = _alpha;
    proceduralData.roughness = _roughness;
    proceduralData.metallic = _metallic;
    proceduralData.occlusion = _occlusion;
    proceduralData.scattering = _scattering;
    return _emissiveAmount;
}