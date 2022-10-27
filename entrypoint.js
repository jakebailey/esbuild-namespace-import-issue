import { foo, sub } from "./src/compiler/_namespaces/ts";
import { callme } from "./src/compiler/sub";

foo();

callme();

sub.callme();
