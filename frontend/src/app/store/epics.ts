import { Injectable } from '@angular/core';

import { ArticleAPIEpics } from '../article/api/epics';

@Injectable()
export class RootEpics {
  constructor(private articleEpics: ArticleAPIEpics) {}

  public createEpics() {
    return [
      ...this.articleEpics.createEpics(),
    ];
  }
}
