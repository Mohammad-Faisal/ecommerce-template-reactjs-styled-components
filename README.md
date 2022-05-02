
####first install docker
```$xslt
 sudo apt install docker.io
```
####log in to docker 

```$xslt
docker login --username 56faisal --password **********
```

#### Pull docker image

```$xslt
sudo docker pull 56faisal/rokkhi-products-services-frontend:latest
```

#### Run docker image

```$xslt
sudo docker run -p 3000:80 56faisal/rokkhi-products-services-frontend:latest
```

#### Then find out the ip no from the console output and access it like this

http://172.17.0.1:3000/product/categories/2/vendors
