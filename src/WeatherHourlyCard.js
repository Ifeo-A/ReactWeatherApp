import React from 'react';

class WeatherHourlyCard extends React.Component
{
    render()
    {
        return (
            <div className="weatherHourlyCard">
                <span className="title">Hourly Forecast</span>
                {/*<span className="day">{this.props.dayOfWeek}</span>*/}
                {/*<span className="date">{this.props.date}</span>*/}
                {/*<span className="time">{this.props.time}</span>*/}
                {/*<span className="image"><img src={`http://openweathermap.org/img/w/${this.props.iconId}.png`} alt=""/> </span>*/}
                {/*<span className="description">{this.props.description}</span>*/}
                {/*<span className="minTemp">Min {this.props.minTemp}&deg;C</span>*/}
                {/*<span className="maxTemp">Max {this.props.maxTemp}&deg;C</span>*/}
                {/*<button onclick={this.getWeather()}>Get</button>*/}
            </div>
        );
    }
}

export default WeatherHourlyCard;