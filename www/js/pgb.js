function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	/*document.getElementById("networkInfo").addEventListener("click", networkInfo);*/
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", onOnline, false);
	/*navigator.notification.beep(1);*/
}

function networkInfo() {
   var networkState = navigator.connection.type;
   var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.CELL]     = 'Cell generic connection';
   states[Connection.NONE]     = 'No network connection';
   alert('Connection type: ' + states[networkState]);
}

function onOffline() {
   alert('You are now offline!');
}

function onOnline() {
   alert('You are now online!');
}