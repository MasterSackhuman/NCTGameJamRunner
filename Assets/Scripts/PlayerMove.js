#pragma strict


var jumpSpeed : float = 10;
var moveSpeed : float = 3;

var walkInput : float = 0;

var myRigidbody : Rigidbody = null;

// called when the object is loaded
function Start () {
	myRigidbody = this.GetComponent(Rigidbody);
}

function Update () {

}


function FixedUpdate () {
		
		// check for jump
		if(Input.GetKeyUp(KeyCode.Space)){
			// we are jumping, so add some force upwards to move us
			myRigidbody.AddForce(Vector3.up * jumpSpeed, ForceMode.VelocityChange);
		}
		
		// get the input of the player
		walkInput = Input.GetAxis("Horizontal");
		
		// move forward
		transform.Translate(Vector3.forward * walkInput * moveSpeed * Time.deltaTime);
}