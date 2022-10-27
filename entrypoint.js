import { callDirectly, callViaReexport, callViaWildcard, sub } from "./src/_namespaces/ns";
import * as sub2 from "./src/_namespaces/ns.sub";
import { callme } from "./src/_namespaces/ns.sub";

callViaReexport();
callViaWildcard();
callDirectly();

sub.callme();
sub2.callme();
callme();
