import React from 'react';
class WeatherCard extends React.Component
{
    state = {
      selectedCardDay : this.props.dayOfWeek,
    };
    check = ()=>
    {
        console.log("Day " + this.state.selectedCardDay);
    };

    render = ()=>
    {
        return (
            <div className="weatherCard" onClick={this.check}>
                <span className="day">{this.props.dayOfWeek}</span>
                <span className="date">{this.props.date}</span>
                <span className="time">{this.props.time}</span>
                <span className="image"><img src={`http://openweathermap.org/img/w/${this.props.iconId}.png`} alt=""/> </span>
                <span className="description">{this.props.description}</span>
                <span className="minTemp">Min {this.props.minTemp}&deg;C</span>
                <span className="maxTemp">Max {this.props.maxTemp}&deg;C</span>
                {/*<button onclick={this.getWeather()}>Get</button>*/}
            </div>
        );
    }
}

export default WeatherCard;