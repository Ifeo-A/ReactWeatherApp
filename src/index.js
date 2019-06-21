import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './WeatherApp';

const render = () => {
    ReactDOM.render(
        <WeatherApp/>,
        document.getElementById('root')
    );
};

render();

/* Check if the module is hot reloadable
 * Link: https://webpack.js.org/api/hot-module-replacement/
 */
if (module.hot)
{
    module.hot.accept("./WeatherApp", () => {
        render();
    });
}