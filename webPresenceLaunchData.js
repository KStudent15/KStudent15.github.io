// a class to set up the data 
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bpmSensor_altitude,
        bpmSensor_pressure,
        bpmSensor_temperature,
        digSensor_temperature,
        cssSensor_temperature,
        cssSensor_eCO2,
        cssSensor_TVOC,
        uv,
        accel_x,
        accel_y,
        accel_z,
        magnetic_x,
        magnetic_y,
        magnetic_z,
        gyro_x,
        gyro_y,
        gyro_z,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bpmSensor_altitude = bpmSensor_altitude;
        this.bpmSensor_pressure = bpmSensor_pressure;
        this.bpmSensor_temperature = bpmSensor_temperature;
        this.digSensor_temperature = digSensor_temperature;
        this.cssSensor_temperature = cssSensor_temperature;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
        this.accel_x = accel_x;
        this.accel_y = accel_y;
        this.accel_z = accel_z;
        this.magnetic_x = magnetic_x;
        this.magnetic_y = magnetic_y;
        this.magnetic_z = magnetic_z;
        this.gyro_x = gyro_x;
        this.gyro_y = gyro_y;
        this.gyro_z = gyro_z;
    }
}

// a getData Function to load data
function getData() {
    var loadedData = loadData();
    return loadedData;
}

// a dataRow function to setup the data
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

// updateDisplay to tie it all together

function updateDisplay() {

    // record and display time
    theTime = new Date();
    document.getElementById("clockTime").innerHTML = theTime.getHours() + ":"
        + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
        + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

    var timeRead = data[index].time_seconds;
    //update table...
    if (timeRead >= 10) {
        //seconds
        document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        //latitude
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, "");
        //longitude
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, "");
        //gps_altitude
        document.getElementById("data").rows["gps_altitude"].innerHTML =
            dataRow("gps_altitude", data[index].gps_altitude, "");
        //bmp_altitude
        document.getElementById("data").rows["bpm_altitude"].innerHTML =
            dataRow("bpm_altitude", data[index].bpmSensor_altitude, "");
        //bmp_pressure
        document.getElementById("data").rows["bpm_pressure"].innerHTML =
            dataRow("bpm_pressure", data[index].bpmSensor_pressure, "");
        //bmp_temperature
        document.getElementById("data").rows["bpm_temperature"].innerHTML =
            dataRow("bpm_temperature", data[index].bpmSensor_temperature, "");
        //dig_temperature
        document.getElementById("data").rows["dig_temperature"].innerHTML =
            dataRow("dig_temperature", data[index].digSensor_temperature, "");
        //css_temperature
        document.getElementById("data").rows["css_temperature"].innerHTML =
            dataRow("css_temperature", data[index].cssSensor_temperature, "");
        //css_eCO2
        document.getElementById("data").rows["css_eCO2"].innerHTML =
            dataRow("css_eCO2", data[index].cssSensor_eCO2, "");
        //css_TVOC
        document.getElementById("data").rows["css_TVOC"].innerHTML =
            dataRow("css_TVOC", data[index].cssSensor_TVOC, "");
        //UV
        document.getElementById("data").rows["uv"].innerHTML =
            dataRow("uv", data[index].uv, "");
        //accelX
        document.getElementById("data").rows["accel_x"].innerHTML =
            dataRow("accel_x", data[index].accel_x, "");
        //accelY
        document.getElementById("data").rows["accel_y"].innerHTML =
            dataRow("accel_y", data[index].accel_y, "");
        //accelZ
        document.getElementById("data").rows["accel_z"].innerHTML =
            dataRow("accel_z", data[index].accel_z, "");
        //magneticX
        document.getElementById("data").rows["magnetic_x"].innerHTML =
            dataRow("magnetic_x", data[index].magnetic_x, "");
        //magneticY
        document.getElementById("data").rows["magnetic_y"].innerHTML =
            dataRow("magnetic_y", data[index].magnetic_y, "");
        //magneticZ
        document.getElementById("data").rows["magnetic_z"].innerHTML =
            dataRow("magnetic_z", data[index].magnetic_z, "");
        //gyroX
        document.getElementById("data").rows["gyro_x"].innerHTML =
            dataRow("gyro_x", data[index].gyro_x, "");
        //gyroY
        document.getElementById("data").rows["gyro_y"].innerHTML =
            dataRow("gyro_y", data[index].gyro_y, "");
        //gyroZ
        document.getElementById("data").rows["gyro_z"].innerHTML =
            dataRow("gyro_z", data[index].gyro_z, "");
    }

    if (index < 500) {
        index++;
    } else {
        index = 0;
    }

}


