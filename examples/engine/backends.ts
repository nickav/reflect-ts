import { RawNode } from "../manifold/mod.ts";

export interface Authenticator {
  login();
  logout();
  currentUser(): User|null;
}

export interface User {
  userID(): string;
  displayName(): string;
  avatarURL(): string;
}

export interface SearchIndex {
  index(node: RawNode);
  remove(id: string);
  search(query: string): string[];
}


export interface FileStore {
  async readFile(path: string): string|null;
  async writeFile(path: string, contents: string);
}

export class Workbench {
  auth: Authenticator|null;
  index: SearchIndex;
  files: FileStore;
}
