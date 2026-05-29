# 参政党の国会中継検索システム
[リンク](https://choroniumchan-ai.github.io/sst-list/)


# 覚書
[スプレッドシート](https://docs.google.com/spreadsheets/d/1RcWg6WB-qj5xZHZLYpdHGB0R1idd7M7VreT_sO-u3xk/edit?usp=sharing) をデータベースとして、情報を一覧表示して検索できるようにする。

画面は angular、見た目は angular material。
ページのホストは github pages。
gh-pages ブランチにhtmlなどあり。

画面の更新を行う場合は、
ng deploy --base-href=/sst-list/
で gh-pages を更新

データの取得は誰でも出来てしまう
→スプレッドーシートで作った簡易DBなので致し方なし


データ数が多くなると動作が重くなる懸念
→一応、テーブルのページングをつけているが、そのうち遅くなるかも。
　遅くなったら考える。 
　ただ、遅くなるのは初期表示のタイミングのみだし、たぶんそんなにひどいことにはならない気がする。


以下は angular の自動生成README


# TestApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
