# API Test Documentation

# Create a Collection
- Open Postman.
- Click "Collections" in the sidebar.
- Click "+ New Collection".
- Name it "Momentum".
- Add variables to the collection:
    - baseUrl: http://localhost:5000/api
    - authToken: (leave empty)
    - userId: (leave empty)
    - taskId: (leave empty) 
- Click "+ Add request" to create a request.

## 01 Registration Invalid Data Request

```
 POST {{baseUrl}}/auth/register
```

**Body:** 

```
{ 
    "username": "ab",
    "email": "bro@example.com",
    "password": "123"
}
```

**Expected Outcome:**

![Test_1](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_1.png)

## 02 Registration Success Request

```
 POST {{baseUrl}}/auth/register
```

**Body:**

```
{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
}
```

**Expected Outcome:**

![Test_2](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_2.png)

## 03 Registration Duplicate Email Request

```
 POST {{baseUrl}}/auth/register
```

**Body:** 

```
{
    "username": "differentuser",
    "email": "test@example.com",
    "password": "password123"
}
```

**Expected Outcome:**

![Test_3](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_3.png)

## 04 Login Invalid Credentials Request

```
 POST {{baseUrl}}/auth/login
```

**Body:**

```
{
    "email": "test@example.com",
    "password": "wrongpassword"
}
```

**Expected Outcome:**

![Test_4](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_4.png)

## 05 Login Success Request

```
 POST {{baseUrl}}/auth/login
```

**Body:**

```
{
    "email": "test@example.com",
    "password": "password123"
}
```

**Expected Outcome:**

![Test_5](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_5.png)

## 06 Create Task No Auth Request

```
 POST {{baseUrl}}/tasks
```

**Headers:**

```
Autharization: (leave empty)
```

**Body:**

```
{
    "message": "Complete API testing documentation",
    "priority": "do-today",
    "deadline": "2024-12-31T23:59:00.000Z"
}
```

**Expected Outcome:**

![Test_6](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_6.png)

## 07 Create Task Invalid Data Request

```
 POST {{baseUrl}}/tasks
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
{
    "message": "",
    "deadline": "invalid-date"
}
```

**Expected Outcome:**

![Test_7_1](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_7_1.png)

![Test_7_2](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_7_2.png)

> IMPORTANT: Replace authToken value on every login/register request success. You will find the value in the response on success.

## 08 Create Task Success Request

```
 POST {{baseUrl}}/tasks
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
{
    "message": "Complete API testing documentation",
    "priority": "do-today",
    "deadline": "2024-12-31T23:59:00.000Z"
}
```

**Expected Outcome:**

![Test_8_1](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_8_1.png)

![Test_8_2](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_8_2.png)

> IMPORTANT: Replace authToken value on every login/register request success. You will find the value in the response on success.

## 09 Get All Tasks Request

```
 POST {{baseUrl}}/tasks
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
(leave empty)
```

**Expected Outcome:**

![Test_9](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_9.png)

> IMPORTANT: Replace authToken value on every login/register request success. You will find the value in the response on success.

## 10 Update Task Not Found Request

```
 PUT {{baseUrl}}/tasks/507f1f77bcf86cd799439011
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
{
    "message": "This task doesn't exist",
    "priority": "todo",
    "deadline": "2024-12-31T23:59:00.000Z"
}
```

**Expected Outcome:**

![Test_10](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_10.png)

> IMPORTANT: Replace authToken value on every login/register success request. You will find the value in the response on success.

## 11 Update Task Success Request

```
 PUT {{baseUrl}}/tasks/{{taskId}}
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
{
    "message": "Updated: Complete API testing documentation",
    "priority": "for-later",
    "deadline": "2025-01-15T23:59:00.000Z"
}
```

**Expected Outcome:**

![Test_11_1](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_11_1.png)

![Test_11_2](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_11_2.png)

> IMPORTANT: 
> - Replace authToken value on every login/register success request. You will find the value in the response on success.
> - Make sure you add the taskId value to the url. You will find the value in the get all tasks success response panel.

## 12 Toggle Task Completion Request

```
 PATCH {{baseUrl}}/tasks/{{taskId}}/toggle
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
(leave empty)
```

**Expected Outcome:**

![Test_12](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_12.png)

> IMPORTANT: 
> - Replace authToken value on every login/register success request. You will find the value in the response on success.
> - Make sure you add the taskId value to the url. You will find the value in the get all tasks success response panel.

## 13 Get Current User Request

```
 GET {{baseUrl}}/auth/me
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
(leave empty)
```

**Expected Outcome:**

![Test_13](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_13.png)

> IMPORTANT: Replace authToken value on every login/register success request. You will find the value in the response on success.

## 14 Delete Task Not Found Request

```
 DELETE {{baseUrl}}/tasks/507f1f77bcf86cd799439011
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
(leave empty)
```

**Expected Outcome:**

![Test_14](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_14.png)

> IMPORTANT: Replace authToken value on every login/register success request. You will find the value in the response on success.

## 15 Delete Task Success Request

```
 DELETE {{baseUrl}}/tasks/{{taskId}}
```

**Headers:**

| Key | Value |
| :-- | :---- |
| Autharization | Bearer {{authToken}}|

**Body:**

```
(leave empty)
```

**Expected Outcome:**

![Test_15](https://github.com/DevangPatani08/Task_Management_App_Project/blob/01ebb4a16b128751977783d1fc8d9c29c7a28713/backend/testImages/Test_15.png)

> IMPORTANT: 
> - Replace authToken value on every login/register success request. You will find the value in the response on success.
> - Make sure you add the taskId value to the url. You will find the value in the get all tasks success response panel.