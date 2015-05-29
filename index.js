(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"remote-thought-control","version":"1.0.2","description":"how we routinely encode and decode thoughts","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git@github.com:shecodes-content/remote-throught-control.git"},"brain":{"provides":["code","encoding","decoding"],"track":"yellow"},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/shecodes-content/remote-throught-control/issues"},"homepage":"https://github.com/shecodes-content/remote-throught-control"}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"remote-thought-control_remote-thought-control\" class=\"anchor\" href=\"#remote-thought-control_remote-thought-control\"><span class=\"header-link\"></span></a>Remote Thought Control</h1><p>While you read this text, your brain does an incredible thing. It produces a voice inside your head that is talking to you, my voice. It is much like if I, the author, would be sitting right next to you, speaking these words into your ears. My thoughts have been recorded and are being reproduced inside your head right now. It’s quite amazing isn’t it? Those thoughts even traveled through time and space to get to wherever you are right now, long after they were formed. It must have been quite scary and magical when this technique was invented roughly 4000 years ago.</p>\n<p>Your eyes stare onto a screen, scanning line by line from left to right, producing a huge amount of sensory input. In that stream of graphical data, that stream of edges, lines and curves, the visual cortex inside your brain is recognizing patterns, letters of the roman alphabet, punctuation signs and whole words. For the part that then deals with understanding the meaning of what is being said, it does not matter anymore, if the words originate from your ears or from your eyes.</p>\n<p>This works because you learned the codes I am using to encode my message to you. You learned the roman alphabet and the indian digits that I am using. You’ve also learned how to combine these symbols into words that we both associate with the same things (more or less). This communication works, because we have a whole lot in common, we know how to encode thoughts and decode written text.</p>\n<p>Written words are a code for spoken language. Vowels and consonants are codes for sounds we make when speaking. Punctuation signs are codes for rhythm, pauses and melody in a sentence. Written language, like musical notation, makes a lasting recording of passing acoustic sensations. It encodes that sensation in a graphical form that can be stored, transported and accessed later to reproduce the original sensation. Your brain is doing a hell of a lot decoding work right now and you barely notice it! Take a second to reflect on the awesomeness of this accomplishment!  (stop reading, otherwise I keep controlling your thoughts, muting yours)<br>Compared to what your brain is doing here right now, programming a machine is a walk in the park!</p>\n<p>Our letters are roman, our numbers come from India (if that surprises you, then watch the following video), the programming languages are made by nerds. If you learned the first two, you can learn the last one too!</p>\n<p><a href=\"https://www.youtube.com/watch?v=Ar7CNsJUm58\">youtube</a></p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{}]},{},[1]);
