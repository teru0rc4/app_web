# app_web

## imageのビルド
```
docker-compose build
```


## コンテナの起動、サーバーの立ち上げ
```
docker-compose up -d
```

`http://localhost:3000/` 


## ライブラリの更新時
```
docker-compose run --rm app_web sh -c "yarn install"
```