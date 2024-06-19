# wp-header-scroll

WP でヘッダースクロールのベースコード

##　 1.JS 利用方法
main.js のコードをプロジェクトの main.js（グローバル JS ファイル）にコピペーしてください。

## 内容説明

コードはページの上からのスクロールの距離をチェックする

```
const header = document.querySelector("header"); // Headerエレメントを選択する
const nav = document.querySelector("nav"); //Navエレメントを選択する
```

エレメントは追加できる（パターンコピー OK。header/nav 代わりに「#ID 名」で選択できます。

#### スクロールコード

スクロール距離を 50px に設定されたが、数字変更可能。
···
if (window.scrollY > 50) {
//50px 以上スクロールの場合行うコード
} else {
//50px 以内スクロールの場合行うコード
}
···

#### コード内容

···
Variable 名.classList.add("CSS クラス名") // Variable 対応のエレメントに CSS クラスを追加する
Variable 名.classList.remove("CSS クラス名") // Variable 対応のエレメントから CSS クラスを外す
···

## 2.SCSS 利用方法

CSS のサンプル。チャイルドエレメントの CSS クラスでも追加できる。
