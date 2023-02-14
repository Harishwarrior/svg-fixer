import SVGFixer from "oslllo-svg-fixer";

console.log( "Fixing SVG!" );
SVGFixer('svg', 'output').fix()
.then(() => {
    console.log("done");
})
.catch((err) => {
    throw err;
});