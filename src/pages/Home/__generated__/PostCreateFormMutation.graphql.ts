/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PostCreateInput = {
    body: string;
    logo?: File | null | undefined;
    title: string;
};
export type PostCreateFormMutationVariables = {
    input: PostCreateInput;
    connections: Array<string>;
};
export type PostCreateFormMutationResponse = {
    readonly postCreate: {
        readonly post: {
            readonly " $fragmentRefs": FragmentRefs<"PostListItem_post">;
        };
    };
};
export type PostCreateFormMutation = {
    readonly response: PostCreateFormMutationResponse;
    readonly variables: PostCreateFormMutationVariables;
};



/*
mutation PostCreateFormMutation(
  $input: PostCreateInput!
) {
  postCreate(input: $input) {
    post {
      ...PostListItem_post
      id
    }
  }
}

fragment PostListItem_post on Post {
  id
  title
  body
  logo
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "PostCreatePayload",
        "kind": "LinkedField",
        "name": "postCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PostListItem_post"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostCreateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "PostCreatePayload",
        "kind": "LinkedField",
        "name": "postCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "body",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logo",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "post",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "PostEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9fdbe387fdc7878eb4c80a769921645e",
    "id": null,
    "metadata": {},
    "name": "PostCreateFormMutation",
    "operationKind": "mutation",
    "text": "mutation PostCreateFormMutation(\n  $input: PostCreateInput!\n) {\n  postCreate(input: $input) {\n    post {\n      ...PostListItem_post\n      id\n    }\n  }\n}\n\nfragment PostListItem_post on Post {\n  id\n  title\n  body\n  logo\n}\n"
  }
};
})();
(node as any).hash = '9e8f16fb1d94cd20fad9ad60fbbecb84';
export default node;
