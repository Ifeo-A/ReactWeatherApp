import React from 'react';
import axios from 'axios';
import WeatherCard from "./WeatherCard"
import WeatherHourlyCard from "./WeatherHourlyCard"
import moment from "moment";
import UtilityFunctions from "./utilityFunctions"

class WeatherApp extends React.Component
{
    state = {
        city: "Northampton",
        countryCode: "GB",
        weatherArray: [],
    };

    /**
     * componentDidMount() is invoked immediately after a component is mounted.
     * Initialization that requires DOM nodes should go here. If you need to
     * load data from a remote endpoint, this is a good place to instantiate
     * the network request.
     * https://reactjs.org/docs/react-component.html#componentdidmount
     *
     * Its best praactice to use componentDidMount for network requests
     */
    componentDidMount()
    {
        this.getWeather();
    };

    /**
     * Uses axios to get the weather using openweathermap and store the result
     * in the weatherArray
     */
    getWeather()
    {
        //https://stackoverflow.com/questions/28974784/import-class-and-call-static-method-with-es6-modules-with-babel-transpiler
        let utilityFunctions = new UtilityFunctions();
        let propertiesArray = [];
        axios.get("http://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: `${this.state.city},${this.state.countryCode}`,
                // cnt: 12,
                units: "metric",
                appid: "a64d010035e77b4fc9a9e93abb77445a"
            }
        })
            .then(response =>
            {
                console.log(response);
                // this.setState({result: response});
                // console.log(`City: ${response.data.city.name}`); //name
                // console.log(`Temperature: ${response.data.list[0].main.temp}`); //current temp
                // console.log(`Weather description: ${response.data.list[0].weather[0].description}`); //weather description
                // console.log(`Icon Id: ${response.data.list[0].weather[0].icon}`); //icon id .e.g http://openweathermap.org/img/w/10d.png
                // console.log(`Result count: ${response.data.cnt}`); // result count
                // console.log(`Time: ${response.data.list[0].dt_txt}`); // text time
                // console.log(`Day of week: ${moment(response.data.list[0].dt_txt).format("dddd")}`); // day of week
                // console.log(`Result count: ${response.data.cnt}`); // day of week

                for (let i = 0; i < response.data.cnt; i++)
                {
                    /* I get 40 results because I am getting a 5 day weather forecast from openweatherapi
                     * that provides weather data for every 3 hours for each day, meaning if I want
                     * to get the high and low weather data for each of the 5 days I have to access
                     * the results at days 1,9,17,25,33 which in index notation becomes
                     * 0, 8, 16, 24, 32
                     */
                    switch(i)
                    {
                        case 0:
                        case 8:
                        case 16:
                        case 24:
                        case 32:

                            /* Push the properties that will be used in the WeatherCard component into
                             * an array.
                             */
                            propertiesArray.push({
                                dayOfWeek: moment(response.data.list[i].dt_txt).format("ddd"),
                                date: moment(response.data.list[i].dt_txt).format("MMMM Do YYYY"),
                                time: moment(response.data.list[i].dt_txt).format("h:mm a"),
                                iconId: response.data.list[i].weather[0].icon,
                                description: utilityFunctions.upperCaseFirstLetter(response.data.list[i].weather[0].description),
                                minTemp: response.data.list[i].main.temp_min,
                                maxTemp: response.data.list[i].main.temp_max,
                            });
                    }

                }
                this.setState({weatherArray: propertiesArray});

            });

        console.log("weatherArray: ", this.state.weatherArray);
        console.log("propertiesArray: ", propertiesArray);
    };

    render()
    {
        return (
            <div>
                <div className="cards">
                    {this.state.weatherArray.map((entry, index) =>
                    {
                        return <WeatherCard
                            key={index}
                            dayOfWeek={entry.dayOfWeek}
                            date={entry.date}
                            time={entry.time}
                            iconId={entry.iconId}
                            description={entry.description}
                            minTemp={entry.minTemp}
                            maxTemp={entry.maxTemp}
                        />
                    })}
                </div>
                <WeatherHourlyCard/>
            </div>
        );
    }
}

export default WeatherApp

//setStates forces the DOM to be re-rendered everytime its called.