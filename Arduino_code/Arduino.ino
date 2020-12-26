#include "DHT.h"
#include <SoftwareSerial.h>
SoftwareSerial s(5,6);
#define DHTPIN 2
const int sensor_pin = A0;
const int motorPin = 4;

#define DHTTYPE DHT11 

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  s.begin(9600);
  Serial.begin(9600); 
  dht.begin();
}

void loop() {
  float moisture_percentage;
  int sensor_analog;
  delay(1000);

  //Soil mositure using SOIL MOISTURE SENSOR
  sensor_analog = analogRead(sensor_pin);
  //Serial.println(sensor_analog);
  moisture_percentage = ( 100 - ( (sensor_analog/1023.00) * 100 ) );
  delay(100);

  //Temperature, Humidity using DHT11
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);
  
  // Check if any reads failed and exit early (to try again)
  if (isnan(h) || isnan(t) || isnan(f)) 
  {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }


  //Water supply activation
  if(moisture_percentage<40 && f>85)
  {
    pinMode(motorPin, OUTPUT);
    digitalWrite(motorPin, HIGH);
  }
  else
  {
    pinMode(motorPin, OUTPUT);
    digitalWrite(motorPin, LOW);
  }

  Serial.print("\nHumidity : "); 
  Serial.print(h);
  Serial.print("%\n");
  Serial.print("Moisture Percentage : ");
  Serial.print(moisture_percentage);
  Serial.print("%\n");
  Serial.print("Temperature:");
  Serial.print("\nIn Celcius : ");
  Serial.print(t);
  Serial.print("\nIn Farenheit : ");
  Serial.print(f);
  
  Serial.println("\n\n");

  if(s.available()>0)
  {
    s.write(int(h));
    delay(200);
    s.write(int(moisture_percentage));
    delay(200);
    s.write(int(t));
    delay(200);
    s.write(int(f));
    delay(200);
  }
}
