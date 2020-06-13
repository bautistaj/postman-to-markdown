# Store
***
# 📁Product 
## 🚀 Get products
### GET
### Get all products
```
{{url}}/api/products/
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Update a product
### PUT
### Update a product
```
{{url}}/api/products/5eaac0e7e5b4af1a4cd56215
```
### Body (**raw**)
>
```
{
	"name":"Sherbet - Raspberry",
	"image":"http://dummyimage.com/178x104.jpg/cc0000/ffffff",
	"description":"error: undefined method `/' for nil:NilClass",
	"price":100.50
} 
```
>
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Get detail of product
### GET
### Get the detail og product
```
{{url}}/api/products/5eaac0e7e5b4af1a4cd56215
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Crete a product
### POST
### Crete a product
```
{{url}}/api/products/
```
### Body (**raw**)
>
```
{
	"name":"Sherbet",
	"image":"http://dummyimage.com/178x104.jpg/cc0000/ffffff",
	"description":"error: undefined method `/' for nil:NilClass",
	"price":77.3,
	"company": "5eac9c049454c536b420c990"
} 
```
>
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Delete product
### DELETE
### Delete product
```
{{url}}/api/products/5eaac0e7e5b4af1a4cd56215
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
***
# 📁User 
## 🚀 Get  users
### GET
### Get  users
```
{{url}}/api/users/
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Update user
### PUT
### Update user
```
{{url}}/api/users/5eac2485593c460abc731884
```
### Body (**raw**)
>
```
{
	"username": "CAMPOSB",
	"photo": "http://dummyimage.com/109x234.bmp/ff4444/",
	"password": "CAMPOSB2019",
	"email": "jose.campos@ulfix.com"
} 
```
>
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Get detail of user
### GET
### Get detail of user
```
{{url}}/api/users/5eac2485593c460abc731884
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Create user
### POST
### 
```
{{url}}/api/users/
```
### Body (**raw**)
>
```
{
	"password": "CAMPOSB2019",
	"email": "jose.campos@ulfix.com",
	"username":"CAMPOSB2019"
} 
```
>
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Delete user
### DELETE
### Delete user
```
{{url}}/api/users/5eac2485593c460abc731884
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
***
# 📁Company 
## 🚀 Create company
### POST
### Create company
```
{{url}}/api/companies/
```
### Body (**raw**)
>
```
{
	"name": "CAMPOSB",
	"description": "Gallery of paints",
	"user": "5eac2510b073fa0dac0e3568"
} 
```
>
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Update company
### PUT
### Update company
```
{{url}}/api/companies/5eac281e7cdd9b1ac0621da4
```
### Body (**raw**)
>
```
{
	"name": "CAMPOSB",
	"description": "Gallery of paints",
	"user": "5eac2510b073fa0dac0e3568",
	"image": "http://dummyimage.com/178x104.jpg/cc0000/ffffff"
} 
```
>
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Get detail of company
### GET
### Get detail of company
```
{{url}}/api/companies/5eac27007cdd9b1ac0621da2
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Get companies
### GET
### Get companies
```
{{url}}/api/companies/
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
## 🚀 Delete company
### DELETE
### Delete company
```
{{url}}/api/companies/5eac27007cdd9b1ac0621da2
```
### 🔑 Authentication bearer
>|Param|value|Type|
>|---|---|---|
>|token|{{access_token}}|string|
***
# 📁Auth 
## 🚀 Sign in
### POST
### Sign in user
```
{{url}}/api/auth/sign-in
```
### Body (**raw**)
>
```
{
	"apiKeyToken": "{{admin_api_key_token}}"
} 
```
>
### Query Params
>|Param|value|
>|---|---|
>|apiKeyToken||
### 🔑 Authentication basic
>|Param|value|Type|
>|---|---|---|
_________________________________________________
Author: [bautistaj](https://github.com/bautistaj)

Package: [postman-to-markdown](https://github.com/bautistaj)
