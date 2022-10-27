import { callDirectly, callViaReexport, callViaWildcard, sub } from "./src/_namespaces/ns";
import * as sub2 from "./src/sub";

callViaReexport();
callViaWildcard();
callDirectly();

sub.callme();
sub2.callme();
