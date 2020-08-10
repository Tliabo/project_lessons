/**
 * Aussage von Kolleg: Ich habe keine ahnung von nichts.
 *
 * Mit diesem Script kannst du ihn als lügner entlarven
 */


let ahnungVonAllem = false;
let ahnungVonEtwas = ahnungVonAllem || true;

let ahnungVonNichts = !ahnungVonAllem && !ahnungVonEtwas;


console.log(ahnungVonNichts) // output should be "false", das bedeutet, er hat nicht keine ahnung von nichts.
// kann eine person keine ahnung von etwas haben?