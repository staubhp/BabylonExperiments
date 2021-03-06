var canvas = document.getElementById("renderCanvas");
if (canvas == null){
	console.error("No canvas with ID = 'renderCanvas' found");
}
var engine = new BABYLON.Engine(canvas, true);

var createSimpleSphereScene = function(){
	var scene = new BABYLON.Scene(engine);
	var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
	camera.setTarget(new BABYLON.Vector3.Zero());
	camera.attachControl(canvas, false);
	var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity = .5;
	var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
	sphere.position.y = 1;
	var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
	return scene;
}

var createSimpleShapesScene = function(){
	var scene = new BABYLON.Scene(engine);
	var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas, false);
	var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity = .7;
	var box = BABYLON.Mesh.CreateBox("box", 6.0, scene);
	var plane = BABYLON.Mesh.CreatePlane("plane", 10.0, scene);
	var lines = BABYLON.Mesh.CreateLines("lines", [
			new BABYLON.Vector3(-10, 0, 0),
			new BABYLON.Vector3(10, 0, 0),
			new BABYLON.Vector3(0, 0, 10)
			], scene);
	var cylinder = BABYLON.Mesh.CreateCylinder("cylinde", 3, 3, 3, 6, 1, scene, false);

	box.position = new BABYLON.Vector3(-10, 0, 0);
	plane.position = new BABYLON.Vector3(0, 10, 0);

	/*
	var precision = {
		"w" : 4,
		"h" : 2
	};
	var subdivisions = {
		"h" : 8,
		"w" : 8
	};
	var tiledGround = BABYLON.Mesh.CreateTiledGround("Tiled", -3, -3, 3, 3, subdivisions, precision, scene, false);*/
	var ground = BABYLON.Mesh.CreateGround("ground1", 20 , 20, 2, scene);
	ground.position = new BABYLON.Vector3(0,-3,0);


		
	return scene;
		
}

var scene = createSimpleShapesScene();	

engine.runRenderLoop(function() {
	scene.render();
});

window.addEventListener("resize", function(){
	engine.resize();
});

