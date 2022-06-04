(function() {
    'use strict';

function loadComponent(url)
{
    return new Promise(function(resolve, reject)
    {
    console.log("Loading " + url);
        let script = document.createElement('script');
        script.setAttribute("language", "JavaScript");
        script.setAttribute("crossorigin", "anonymous");
        script.src = url;
        script.onload = function()
        {
            resolve(url);
        }
        script.onerror = function() {
            reject(url);
        }
        document.body.appendChild(script);
        console.log("Loaded " + url);
    })
}

let scripts =
[
    "https://github.com/tetris245/tetris245/blob/master/Quick-AccessMenu2.1/script.js",
]

let promises = [];
scripts.forEach(function(url)
{
    promises.push(loadComponent(url));
});

console.log("Welcome to QAM!");

Promise.all(promises).then(function()
{
    console.log("QAM: Script loaded.");
}).catch(function(script)
{
    console.log("QAM: " + script + " failed to load.");
})
})();
