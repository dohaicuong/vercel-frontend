/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AQueryVariables = {};
export type AQueryResponse = {
    readonly ok: boolean;
};
export type AQuery = {
    readonly response: AQueryResponse;
    readonly variables: AQueryVariables;
};



/*
query AQuery {
  ok
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "ok",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "72c8269409ce405f3d8cfabc818b4717",
    "id": null,
    "metadata": {},
    "name": "AQuery",
    "operationKind": "query",
    "text": "query AQuery {\n  ok\n}\n"
  }
};
})();
(node as any).hash = 'd382abdccc8d160ad4f5e5daff5a2075';
export default node;
