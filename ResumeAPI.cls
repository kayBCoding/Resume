@RestResource(urlMapping='/myApiEndpoint/*')
global with sharing class ResumeAPI {
    @HttpGet
    global static String doGet() {
        // Your GET logic here
    }
    
    @HttpPost
    global static String doPost(String postData) {
        // Your POST logic here
    }
}
