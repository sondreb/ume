var db = null;
var ia = null;
var messages = null;

function onPopulate() {

    log('Population Test');
    //var db = new loki('ume.db');
}

function onPublish() {
    log('Publish');

    var text = document.getElementById('message').value;

    if (!text) {
        return;
    }

    log('text: ' + text);
    messages.insert({ id: 1, text: text });

    // Clear the user input.
    document.getElementById('message').value = '';
}

function deleteDatabase() {
    // DELETE DATABASE
    // delete 'finance'/'test' value from catalog
    db.deleteDatabase('test', function () {
        log('Database Deleted.');
        // database deleted
    });
}

function log(text) {
    console.debug('ume: ' + text);
};

// Now let's implement the autoloadback referenced in loki constructor
function databaseInitialize() {
    var entries = db.getCollection("entries");
    messages = db.getCollection("messages");

    // Since our LokiFsStructuredAdapter is partitioned, the default 'quickstart3.db'
    // file will actually contain only the loki database shell and each of the collections
    // will be saved into independent 'partition' files with numeric suffix.

    // Add our main example collection if this is first run.
    // This collection will save into a partition named quickstart3.db.0 (collection 0)  
    if (entries === null) {
        // first time run so add and configure collection with some arbitrary options
        entries = db.addCollection("entries", { indices: ['x'], clone: true });
    }

    // Now let's add a second collection only to prove that this saved partition (quickstart3.db.1) 
    // doesn't need to be saved every time the other partitions do if it never gets any changes
    // which need to be saved.  The first time we run this should be the only time we save it.
    if (messages === null) {
        messages = db.addCollection("messages");
        messages.insert({ txt: "i will only insert into this collection during databaseInitialize" });
    }

    // kick off any program logic or start listening to external events
    runProgramLogic();
}

// While we could have done this in our databaseInitialize function, 
//   lets go ahead and split out the logic to run 'after' initialization into this 'runProgramLogic' function
function runProgramLogic() {
    var entries = db.getCollection("entries");
    var entryCount = entries.count();
    var now = new Date();

    log("old number of entries in database : " + entryCount);

    entries.insert({ x: now.getTime(), y: 100 - entryCount });
    entryCount = entries.count();

    log("new number of entries in database : " + entryCount);

    log("");
    log("Wait 4 seconds for the autosave timer to save our new addition")
    log("If you waited 4 seconds, the next time you run this script the numbers should increase by 1");
    log("The four second interval can be adjusted in the call to loki constructor");
}

(function onStart() {

    ia = new LokiIndexedAdapter("ume");

    db = new loki('ume.db', {
        adapter: ia,
        autoload: true,
        autoloadCallback: databaseInitialize,
        autosave: true,
        autosaveInterval: 4000
    });

    log('onStart');

})();
