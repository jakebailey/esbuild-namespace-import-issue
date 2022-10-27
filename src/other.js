import { sub } from "./_namespaces/ns";
import * as sub2 from "./_namespaces/ns.sub";

export function callViaReexport() {
    sub.callme();
}

export function callViaWildcard() {
    sub2.callme();
}

export function callDirectly() {
    sub.callme();
}
