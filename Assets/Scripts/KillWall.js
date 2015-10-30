#pragma strict

var moveSpeed : float = 3;

var thisTransform : Transform = null;

function Start () {
// set this transform
	thisTransform = this.transform;
}

function FixedUpdate () {
		//just move forward
		thisTransform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
}