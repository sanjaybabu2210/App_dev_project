class MoistSensor {
  constructor(
    id,
    imageUrl,

    moisture,
    humidity,
    temp_c,
    temp_f
    
   
  ) {
    this.id = id;
        this.imageUrl = imageUrl;

    this.moisture = moisture;
    this.humidity = humidity;
    this.temp_c = temp_c;
    this.temp_f= temp_f;
    
  }
}

export default MoistSensor;
