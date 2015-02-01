'use strict';

function LinkedList() {
	this.start = null;
	this.end = null;
}

LinkedList.prototype.add = function(data) {
	if(this.start === null) {
		this.start = createNode(data);
		this.end = this.start;
	}
	else {
		this.end.next = createNode(data);
		this.end = this.end.next;
	}
}

LinkedList.prototype.remove = function(data) {
	var curr = this.start;
	var prev = null;

	while(curr != null) {
		// if we found the node to remove
		if(curr.data === data) {
			// we're the last node
			if(this.end == curr) {
				this.end = prev;
			}
			// if prev exists, set next to the node after curr
			if(prev) {
				prev.next = curr.next;
			}
			// if prev does not exist, we are the start node, set start to next node
			else {
				this.start = curr.next;
			}
			return true;
		}
		// move forward in the list
		prev = curr;
		curr = curr.next;
	}
	return false;
}

// Insert new data after the marker data
LinkedList.prototype.insertAfter = function(marker, newData) {
	var curr = this.start;
	var prev = null;
	while(curr != null) {
		if(curr.data === marker) {
			var tmpNode = curr.next;
			var newNode = createNode(newData);
			newNode.next = tmpNode;
			curr.next = newNode;
		}
		prev = curr;
		curr = curr.next;
	}
}

// Reverse the SLL
LinkedList.prototype.reverse = function() {
	var curr = this.start;
	var prev = null;

	while(curr !== null) {

		var tmpNext = curr.next;
		if(prev){
			curr.next = prev;
		}
		else {
			this.end = curr;
			curr.next = null;
		}
		prev = curr;
		curr = tmpNext;
	}
	// Set our start to the last node
	this.end = this.start;
	this.start = prev;

}

function createNode(data) {
	return {data:data, next:null};
}

LinkedList.prototype.print = function() {
	var curr = this.start;
	var output = 'start--->';
	while(curr != null) {
		output += curr.data;
		output += '--->';
		curr = curr.next;
	}
	output += 'end';
	console.log(output);
}

module.exports = LinkedList;