#pragma strict

// called when someone enters the trigger
function OnTriggerEnter (col : Collider) {
	// check if it is the player
	if(col.tag == "Player"){
		Destroy(col.gameObject);
	}
}