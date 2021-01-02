#include "DHT.h"
#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <ArduinoJson.h>
#include <SoftwareSerial.h>

#define DHTTYPE DHT11   
#define DHTPIN 4     
const int sensor_pin = A0;   
const int motorPin = 2;

DHT dht(DHTPIN, DHTTYPE);

#define FIREBASE_HOST "blitzkrieg-afd58.firebaseio.com" 
#define FIREBASE_AUTH "Kxe1mfJlZVT2pFdt5Oj2oCiHvciOzjrxEOA9OkFS" 
#define WIFI_SSID "sany 2210"
#define WIFI_PASSWORD "sanjay11"

void setup() 
{
  Serial.begin(9600);
  dht.begin();
  pinMode(motorPin,OUTPUT);
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) 
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                                      //print local IP address
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);                                       // connect to firebase
}

void loop() 
{
  
  float moisture_percentage;
  int sensor_analog;
  sensor_analog = analogRead(sensor_pin);
  //Serial.println(sensor_analog);
  moisture_percentage = ( 100 - ( (sensor_analog/1023.00) * 100 ) );
  Serial.print("\nMoisture Percentage = ");
  Serial.print(moisture_percentage);
  Serial.print("%\n");
  delay(1000);

  float h = dht.readHumidity();
  // Read temperature as Celsius
  float t = dht.readTemperature();
  // Read temperature as Fahrenheit
  float f = dht.readTemperature(true);
  //Check if any reads failed
  if (isnan(h) || isnan(t) || isnan(f)) 
  {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }
  

  Serial.print("Humidity: "); 
  Serial.print(h);
  Serial.print("%\n");
  Serial.print("Temperature");
  Serial.print("\nIn Celcius : ");
  Serial.print(t);
  Serial.print("\nIn Farenheit : ");
  Serial.println(f);
  
  Firebase.pushInt("/Data/1_Humidity", h);
  Firebase.pushInt("/Data/2_Moisture level", moisture_percentage);
  Firebase.pushInt("/Data/3_Temperature C", t);
  Firebase.pushInt("/Data/4_Temperature F", f);

  if(Firebase.getString("/Motor/status")=="true")
    {
      digitalWrite(motorPin,HIGH);
      Serial.println("Motor is ON");
    }
   else
    {
      digitalWrite(motorPin,LOW);
      Serial.println("Motor is OFF");
    }
  delay(500);    
  
}