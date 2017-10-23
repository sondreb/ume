(function onStart() {
	var crypto = window.crypto || window.msCrypto;
	var supported = true;

	if (!crypto && !crypto.subtle) {
		supported = false;
	}

	if (!window.TextEncoder || !window.TextDecoder) {
		supported = false;
	}

	if (!supported) {
		console.log(document.getElementById('browser-warning'));
		document.getElementById('browser-warning').classList.remove('hidden');
		document.getElementById('app').classList.add('hidden');
	}
}());
