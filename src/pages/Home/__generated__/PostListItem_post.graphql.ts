/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type PostListItem_post = {
    readonly id: string;
    readonly title: string;
    readonly body: string;
    readonly logo: string | null;
    readonly " $refType": "PostListItem_post";
};
export type PostListItem_post$data = PostListItem_post;
export type PostListItem_post$key = {
    readonly " $data"?: PostListItem_post$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PostListItem_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostListItem_post",
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
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '218e134cef6c8aa39b239d89f7c59ea3';
export default node;
